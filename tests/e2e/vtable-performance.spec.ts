import {promises as fs} from 'node:fs';
import {cpus, platform, release} from 'node:os';
import Path from 'node:path';
import {gzipSync} from 'node:zlib';
import {expect, test} from '@playwright/test';

import type {DTable} from '@zui/dtable';
import type {VTable} from '@zui/vtable';

type Kind = 'VTable' | 'DTable';
type Timing = {syncMs: number; paintedMs: number};
type BenchmarkRow = {id: string; [key: `field-${number}`]: number};
type BenchmarkWindow = Window & {
    zui: {
        VTable: typeof import('@zui/vtable').VTable;
        DTable: typeof import('@zui/dtable').DTable;
        vtableSortingPlugin: typeof import('@zui/vtable/plugins/sorting').vtableSortingPlugin;
    };
    vtableBenchmark: {
        initialize: () => Promise<Timing>;
        replace: () => Promise<Timing>;
        sort: () => Promise<Timing>;
        scroll: () => Promise<{durationMs: number; frames: number; longTasks: number[]}>;
        dom: () => {elements: number; cells: number};
        dispose: () => void;
    };
};

const output = Path.resolve(import.meta.dirname, '../../test-results/vtable-build');

test('records a reproducible production comparison with DTable', async ({browser, browserName, baseURL}, testInfo) => {
    test.skip(process.env.VTABLE_BENCHMARK !== '1', 'Run explicitly with VTABLE_BENCHMARK=1 after the VTable distribution build.');
    test.skip(browserName !== 'chromium', 'Heap measurements use the Chromium DevTools Protocol.');
    test.setTimeout(600_000);
    const repetitions = Number(process.env.VTABLE_BENCHMARK_REPEATS ?? 3);
    expect(Number.isInteger(repetitions) && repetitions > 0 && repetitions <= 10).toBe(true);
    const combined = Path.join(output, 'vtable-combined/zui.vtable-combined');
    const [javascript, stylesheet] = await Promise.all([
        fs.readFile(`${combined}.js`),
        fs.readFile(`${combined}.css`),
    ]).catch(() => {
        throw new Error('Build the production fixtures first: pnpm exec vitest run --project build tests/build/vtable.test.ts');
    });
    const artifacts = [];
    for (const name of ['vtable-core', 'vtable-plugins', 'dtable-baseline', 'vtable-combined']) {
        for (const extension of ['esm.js', 'js', 'css']) {
            const bytes = await fs.readFile(Path.join(output, name, `zui.${name}.${extension}`));
            artifacts.push({name, extension, bytes: bytes.length, gzipBytes: gzipSync(bytes).length});
        }
    }
    const samples = [];
    for (const [rows, columns] of [[1000, 20], [100000, 20], [10000, 200]]) {
        for (let repetition = 0; repetition < repetitions; repetition++) {
            // Alternate order to reduce systematic bias from warm browser or CPU state.
            const kinds: Kind[] = repetition % 2 ? ['DTable', 'VTable'] : ['VTable', 'DTable'];
            for (const kind of kinds) {
                const context = await browser.newContext({viewport: {width: 1024, height: 768}, reducedMotion: 'reduce'});
                const page = await context.newPage();
                const errors: string[] = [];
                page.on('pageerror', error => errors.push(error.message));
                try {
                    await page.route('**/__vtable_benchmark__', route => route.fulfill({
                        contentType: 'text/html',
                        body: '<!doctype html><meta charset="utf-8"><title>VTable production benchmark</title><link rel="stylesheet" href="/__vtable_benchmark__/bundle.css"><style>body{margin:0}#benchmark{width:960px;height:320px}</style><div id="benchmark"></div><script src="/__vtable_benchmark__/bundle.js"></script>',
                    }));
                    await page.route('**/__vtable_benchmark__/bundle.js', route => route.fulfill({contentType: 'application/javascript', body: javascript}));
                    await page.route('**/__vtable_benchmark__/bundle.css', route => route.fulfill({contentType: 'text/css', body: stylesheet}));
                    await page.goto(`${baseURL ?? 'http://127.0.0.1:4173'}/__vtable_benchmark__`);
                    await page.evaluate(({kind, rows, columns}) => {
                        const target = window as unknown as BenchmarkWindow;
                        const {zui} = target;
                        const host = document.getElementById('benchmark')!;
                        const makeData = (revision = 0): BenchmarkRow[] => Array.from({length: rows}, (_, index) => {
                            const row: BenchmarkRow = {id: `row-${index}`};
                            for (let column = 0; column < columns; column++) {
                                row[`field-${column}`] = (rows - index) * (column + 1) + revision;
                            }
                            return row;
                        });
                        let data = makeData();
                        let instance: VTable<BenchmarkRow> | DTable | undefined;
                        const afterPaint = () => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
                        const measure = async (action: () => void): Promise<Timing> => {
                            const start = performance.now();
                            action();
                            const syncMs = performance.now() - start;
                            await afterPaint();
                            return {syncMs, paintedMs: performance.now() - start};
                        };
                        target.vtableBenchmark = {
                            async initialize() {
                                // Prepare input definitions before timing; both libraries receive identical fixed data.
                                const definitions = Array.from({length: columns}, (_, index) => ({id: `field-${index}`, title: `Column ${index + 1}`}));
                                const common = {data, width: 960, height: 320, rowHeight: 36};
                                const options = kind === 'VTable' ? {
                                    ...common,
                                    columns: definitions.map(({id, title}) => ({id, accessorKey: id, header: title, size: 140})),
                                    getRowId: (row: BenchmarkRow) => row.id,
                                    plugins: [zui.vtableSortingPlugin],
                                } : {
                                    ...common,
                                    cols: definitions.map(({id, title}) => ({name: id, title, width: 140, sort: 'number'})),
                                    rowKey: 'id',
                                    headerHeight: 36,
                                    sort: true,
                                    striped: false,
                                    horzScrollbarPos: 'inside' as const,
                                    vertScrollbarPos: 'inside' as const,
                                };
                                const start = performance.now();
                                let ready!: () => void;
                                const initialized = new Promise<void>((resolve) => {
                                    ready = resolve;
                                });
                                if (kind === 'VTable') {
                                    instance = new zui.VTable<BenchmarkRow>(host, {...options as import('@zui/vtable').VTableOptions<BenchmarkRow>, $onInited: ready});
                                } else {
                                    instance = new zui.DTable(host, {...options as import('@zui/dtable').DTableOptions, $onInited: ready});
                                }
                                const syncMs = performance.now() - start;
                                await initialized;
                                await afterPaint();
                                return {syncMs, paintedMs: performance.now() - start};
                            },
                            async replace() {
                                data = makeData(1);
                                return measure(() => instance!.render({data}));
                            },
                            async sort() {
                                const result = await measure(() => {
                                    if (kind === 'VTable') {
                                        (instance as VTable<BenchmarkRow>).table!.setSorting([{id: 'field-0', desc: false}]);
                                    } else {
                                        host.querySelector<HTMLElement>('.dtable-header .dtable-sort-link')!.click();
                                    }
                                });
                                const firstId = kind === 'VTable'
                                    ? (instance as VTable<BenchmarkRow>).table!.getRowModel().rows[0].id
                                    : (instance as DTable).$!.getRowInfoByIndex(0)?.id;
                                if (firstId !== `row-${rows - 1}`) {
                                    throw new Error(`${kind} did not sort the numeric data ascending (first row: ${firstId}).`);
                                }
                                return result;
                            },
                            async scroll() {
                                const longTasks: number[] = [];
                                const observer = new PerformanceObserver((list) => {
                                    longTasks.push(...list.getEntries().map(entry => entry.duration));
                                });
                                observer.observe({type: 'longtask'});
                                const start = performance.now();
                                const frames = 60;
                                const maxTop = Math.max(0, rows * 36 - (320 - 36));
                                const maxLeft = Math.max(0, columns * 140 - 960);
                                for (let frame = 0; frame < frames; frame++) {
                                    const progress = frame / (frames - 1);
                                    const scrollTop = Math.round(maxTop * progress);
                                    const scrollLeft = Math.round(maxLeft * progress);
                                    if (kind === 'VTable') {
                                        host.querySelector<HTMLElement>('[role="table"]')!.scrollTo({top: scrollTop, left: scrollLeft, behavior: 'instant'});
                                    } else {
                                        (instance as DTable).$!.scroll({scrollTop, scrollLeft});
                                    }
                                    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
                                }
                                await afterPaint();
                                longTasks.push(...observer.takeRecords().map(entry => entry.duration));
                                observer.disconnect();
                                return {durationMs: performance.now() - start, frames, longTasks};
                            },
                            dom() {
                                return {elements: host.querySelectorAll('*').length, cells: host.querySelectorAll(kind === 'VTable' ? '[role="cell"]' : '.dtable-body .dtable-cell').length};
                            },
                            dispose() {
                                instance?.destroy();
                                instance = undefined;
                                data = [];
                            },
                        };
                    }, {kind, rows, columns});
                    const client = await context.newCDPSession(page);
                    await client.send('HeapProfiler.collectGarbage');
                    const baseline = await client.send('Runtime.getHeapUsage');
                    const init = await page.evaluate(() => (window as unknown as BenchmarkWindow).vtableBenchmark.initialize());
                    const initialDom = await page.evaluate(() => (window as unknown as BenchmarkWindow).vtableBenchmark.dom());
                    const replace = await page.evaluate(() => (window as unknown as BenchmarkWindow).vtableBenchmark.replace());
                    const sort = await page.evaluate(() => (window as unknown as BenchmarkWindow).vtableBenchmark.sort());
                    const scroll = await page.evaluate(() => (window as unknown as BenchmarkWindow).vtableBenchmark.scroll());
                    const scrolledDom = await page.evaluate(() => (window as unknown as BenchmarkWindow).vtableBenchmark.dom());
                    await client.send('HeapProfiler.collectGarbage');
                    const heap = await client.send('Runtime.getHeapUsage');
                    const sample = {kind, rows, columns, repetition: repetition + 1, init, replace, sort, scroll, initialDom, scrolledDom, heap: {baselineBytes: baseline.usedSize, usedBytes: heap.usedSize, deltaBytes: heap.usedSize - baseline.usedSize}};
                    samples.push(sample);
                    console.log(JSON.stringify(sample));
                    expect(errors).toEqual([]);
                    await page.evaluate(() => (window as unknown as BenchmarkWindow).vtableBenchmark.dispose());
                } finally {
                    await context.close();
                }
            }
        }
    }
    const report = {
        measuredAt: new Date().toISOString(),
        environment: {browser: browser.version(), platform: platform(), release: release(), cpu: cpus()[0]?.model, viewport: {width: 960, height: 320}, repetitions},
        notes: [
            'Production UMD and CSS from the same combined build; fixture has no development entry or framework shell.',
            'Data and column creation excluded. Initialization uses the ordinary asynchronous vanilla lifecycle. paintedMs includes waiting for two animation frames after the operation.',
            '60 equally spaced scroll positions cover both axes. Long tasks are browser entries >= 50 ms; native VTable and DTable public scroll APIs differ.',
            'Heap baseline includes the generated input data. Heap values are measured after forced GC; they do not measure peak allocation or total process memory.',
            'Standalone size profiles: vtable-core is the core only; vtable-plugins is VTable with all three plugins; dtable-baseline is DTable with its ordinary built-in plugins.',
            'vtable-combined contains both components and is only the shared runtime fixture. Exclude it from standalone package-size comparisons.',
        ],
        artifacts,
        samples,
    };
    const reportPath = testInfo.outputPath('vtable-performance.json');
    await fs.writeFile(reportPath, `${JSON.stringify(report, null, 4)}\n`);
    await testInfo.attach('vtable-performance', {path: reportPath, contentType: 'application/json'});
});

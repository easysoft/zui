import postcss from 'postcss';
import cssnano from 'cssnano';
import {createRequire} from 'node:module';
import {expect, test} from 'vitest';

const require = createRequire(import.meta.url);

test('preserves calc-size() while minifying calc() without warnings', async () => {
    const result = await postcss([cssnano()]).process(`
        .details[open]::details-content {
            block-size: auto;
            block-size: calc-size(auto, size);
            width: calc(10px + 5px);
        }
    `, {from: undefined});

    expect(result.warnings()).toEqual([]);
    expect(result.css).toContain('block-size:auto;block-size:calc-size(auto,size)');
    expect(result.css).toContain('width:15px');
});

test('expands inset and converts rem values with the shared PostCSS version', async () => {
    const result = await postcss([
        require('postcss-inset')(),
        require('postcss-rem-to-pixel')({propList: ['*']}),
    ]).process('.panel { inset: 1rem 2rem 3rem 4rem; padding: .5rem; width: calc(100% - 1rem); --label: "1rem"; }', {from: undefined});

    expect(result.warnings()).toEqual([]);
    expect(result.root.nodes[0]).toMatchObject({selector: '.panel'});
    const declarations: Record<string, string> = {};
    result.root.walkDecls((decl) => {
        declarations[decl.prop] = decl.value;
    });
    expect(declarations).toEqual({
        top: '16px',
        right: '32px',
        bottom: '48px',
        left: '64px',
        padding: '8px',
        width: 'calc(100% - 16px)',
        '--label': '"1rem"',
    });
});

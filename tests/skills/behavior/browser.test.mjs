import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';
import {COUNTER, COUNTER_SOURCE, prepareBrowserCase, gradeBrowserCase} from './browser.mjs';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
function workspace(t, id) {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'zui-skill-browser-'));
    t.after(() => fs.rmSync(directory, {recursive: true, force: true}));
    prepareBrowserCase(repo, directory, id);
    return directory;
}
const fixed = COUNTER.replace('super.destroy();', 'this.element.removeEventListener(\'click\', this.onClick);\n        super.destroy();');

test('browser grader detects listeners surviving destruction and accepts actual cleanup', async (t) => {
    const root = workspace(t, 'component-lifecycle');
    assert.equal((await gradeBrowserCase(root, 'component-lifecycle')).passed, false);
    fs.writeFileSync(path.join(root, COUNTER_SOURCE), fixed);
    assert.deepEqual(await gradeBrowserCase(root, 'component-lifecycle'), {name: 'browser-primary-flow', passed: true});
});

test('application grading exercises the installed ZUI component across mount cycles', async (t) => {
    const root = workspace(t, 'application-integration');
    fs.writeFileSync(path.join(root, 'app.js'), fixed.replace('export ', '') + '\nwindow.mountCounter=()=>{window.counter=new Counter(\'#increment\',{onChange:window.countChanged});};\nwindow.unmountCounter=()=>{window.counter?.destroy();window.counter=null;};\n');
    assert.deepEqual(await gradeBrowserCase(root, 'application-integration'), {name: 'browser-primary-flow', passed: true});
    fs.writeFileSync(path.join(root, 'app.js'), 'window.mountCounter=()=>{window.counter=new zui.Component(\'#increment\');window.counter.element.addEventListener(\'click\',window.countChanged);};\nwindow.unmountCounter=()=>{window.counter.element.removeEventListener(\'click\',window.countChanged);window.counter.destroy();window.counter=null;};\n');
    assert.equal((await gradeBrowserCase(root, 'application-integration')).passed, false, 'The task requires a Component subclass, not just an instance');
});

test('static page grading requires working filtering, checkbox updates and keyboard input', async (t) => {
    const root = workspace(t, 'static-page-flow');
    const html = '<!doctype html><html lang="zh-CN"><head><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="zui/zui.css"></head><body><button>全部</button><button>待办</button><button>已完成</button><div id="tasks"></div><script src="app.js"></script></body></html>';
    fs.cpSync(path.join(root, 'assets/zui'), path.join(root, 'site/zui'), {recursive: true});
    fs.writeFileSync(path.join(root, 'site/index.html'), html);
    const render = `const tasks=[['整理需求',false],['修复缺陷',false],['发布版本',true]];let filter='全部';function render(){document.querySelector('#tasks').innerHTML=tasks.map(([name,done],i)=>'<label '+((filter==='待办'&&done||filter==='已完成'&&!done)?'hidden':'')+'><input type="checkbox" data-i="'+i+'" '+(done?'checked':'')+'>'+name+'</label>').join('');}render();`;
    fs.writeFileSync(path.join(root, 'site/app.js'), render);
    assert.equal((await gradeBrowserCase(root, 'static-page-flow')).passed, false);
    fs.appendFileSync(path.join(root, 'site/app.js'), `document.querySelectorAll('button').forEach(button=>button.onclick=()=>{filter=button.textContent;render();});document.querySelector('#tasks').onchange=event=>{tasks[event.target.dataset.i][1]=event.target.checked;render();};`);
    assert.deepEqual(await gradeBrowserCase(root, 'static-page-flow'), {name: 'browser-primary-flow', passed: true});
    fs.writeFileSync(path.join(root, 'site/index.html'), html.replace('<script src="app.js"', '<script type="module" src="app.js"'));
    assert.equal((await gradeBrowserCase(root, 'static-page-flow')).passed, false, 'HTTP success does not prove file URL compatibility');
    fs.writeFileSync(path.join(root, 'site/index.html'), html.replace('href="zui/zui.css"', 'href="../assets/zui/zui.css"'));
    assert.equal((await gradeBrowserCase(root, 'static-page-flow')).passed, false, 'Delivered site must include its own runtime assets');
});

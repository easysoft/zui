import 'zui-dev';
import {$} from '@zui/core';
import {EventHub} from './src/main';

type DemoEvents = {
    ping: CustomEvent<{from: string} | undefined>;
};

onPageUpdate(() => {
    const output = $('#ebOutput');
    const log = (message: string) => {
        const line = message;
        output.append(document.createTextNode(line + '\n'));
        console.log('[event-bus]', message);
    };

    // 每次页面更新（含 HMR）都重建实例，避免旧监听泄漏。
    const hub = new EventHub<DemoEvents>('event-bus-dev');

    // 普通监听：可多次触发。
    hub.on('ping', (event) => {
        log(`on ping, detail=${JSON.stringify(event.detail ?? null)}`);
    });

    $('#ebEmit').on('click', () => {
        log('--- emit ping ---');
        hub.emit('ping');
    });

    $('#ebEmitOnce').on('click', () => {
        log('--- add once + emit twice ---');
        let fired = 0;
        hub.once('ping', () => {
            fired += 1;
            log(`once ping fired ${fired} time(s)`);
        });
        hub.emit('ping');
        hub.emit('ping');
    });

    $('#ebEmitDetail').on('click', () => {
        log('--- emit ping with detail ---');
        hub.emit('ping', {from: 'button'});
    });

    $('#ebOffAll').on('click', () => {
        log('--- offAll then emit ping (should only reach nothing) ---');
        hub.offAll();
        hub.emit('ping');
        log('offAll done, no listener should have logged above');
    });

    $('#ebClear').on('click', () => {
        output.empty();
    });

    log('ready: click buttons to observe on/once/off/emit behavior');
});

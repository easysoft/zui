import 'zui-dev';
import {$} from '@zui/core';
import {store, Store} from './src/main';

onPageUpdate(() => {
    const output = $('#storeOutput');
    const log = (message: string) => {
        output.append(document.createTextNode(message + '\n'));
        console.log('[store]', message);
    };

    $('#storeSet').on('click', () => {
        log('--- set ---');
        store.set('mySecretCode', 1314520);
        store.set('myName', 'Jue');
        store.set('profile', {vip: true, tags: ['a', 'b']});
        store.session.set('sessionOnly', 'temp');
        log('local set: mySecretCode, myName, profile');
        log('session set: sessionOnly');
    });

    $('#storeGetAll').on('click', () => {
        log('--- getAll ---');
        log('local  => ' + JSON.stringify(store.getAll()));
        log('session => ' + JSON.stringify(store.session.getAll()));
        log('profile type preserved => ' + JSON.stringify(store.get('profile')));
    });

    $('#storeIsolation').on('click', () => {
        log('--- profile isolation (foo vs foobar) ---');
        const foo = new Store('foo');
        const foobar = new Store('foobar');
        foo.set('shared', 'foo-value');
        foobar.set('shared', 'foobar-value');
        log('foo.getAll    => ' + JSON.stringify(foo.getAll()));
        log('foobar.getAll => ' + JSON.stringify(foobar.getAll()));
    });

    $('#storeSwitch').on('click', () => {
        log('--- switch profile ---');
        const s = new Store('userA');
        s.set('token', 'A');
        s.session.set('temp', 'A-session');
        s.switch('userB');
        s.set('token', 'B');
        s.session.set('temp', 'B-session');
        log('after switch, local token => ' + s.get('token'));
        log('session synced to userB => ' + JSON.stringify(s.session.getAll()));
    });

    $('#storeClear').on('click', () => {
        output.empty();
    });

    log('ready: click buttons to observe store behavior');
});

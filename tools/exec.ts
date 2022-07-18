import {spawn, SpawnOptionsWithoutStdio} from 'child_process';

export function exec(command: string, args?: ReadonlyArray<string>, options?: SpawnOptionsWithoutStdio): Promise<number | null> {
    return new Promise((resolve) => {
        const spawnObj = spawn(command, args ?? [], {stdio: 'inherit', ...options});
        spawnObj.on('close', (code) => {
            resolve(code);
        });
    });
}

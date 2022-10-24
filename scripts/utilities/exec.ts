import {spawn, exec as execute, ExecOptions, SpawnOptionsWithoutStdio} from 'child_process';

export function exec(command: string, args?: ReadonlyArray<string>, options?: SpawnOptionsWithoutStdio): Promise<number | null> {
    return new Promise((resolve) => {
        const spawnObj = spawn(command, args ?? [], {stdio: 'inherit', ...options});
        spawnObj.on('close', (code) => {
            resolve(code);
        });
    });
}

export function execCmd(command: string, options?: ExecOptions): Promise<number | null> {
    return new Promise((resolve) => {
        const spawnObj = execute(command, options);
        spawnObj.on('close', (code) => {
            resolve(code);
        });
        spawnObj.stdout?.on('data', (data) => {
            console.log(data);
        });
        spawnObj.stderr?.on('data', (data) => {
            console.log(data);
        });
    });
}

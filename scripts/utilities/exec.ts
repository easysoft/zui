import {spawn, exec as execute, ExecOptions, SpawnOptionsWithoutStdio} from 'child_process';

export function exec(command: string, args?: readonly string[], options?: SpawnOptionsWithoutStdio): Promise<void> {
    return new Promise((resolve, reject) => {
        const executable = process.platform === 'win32' && command === 'pnpm' ? 'pnpm.cmd' : command;
        const spawnObj = spawn(executable, args ?? [], {stdio: 'inherit', ...options});
        spawnObj.on('error', reject);
        spawnObj.on('close', (code, signal) => {
            if (code === 0) {
                resolve();
                return;
            }
            reject(new Error(`Command "${command}" failed${signal ? ` with signal ${signal}` : ` with exit code ${code ?? 'unknown'}`}.`));
        });
    });
}

export function execCmd(command: string, options?: ExecOptions): Promise<void> {
    return new Promise((resolve, reject) => {
        const spawnObj = execute(command, options);
        spawnObj.on('error', reject);
        spawnObj.on('close', (code, signal) => {
            if (code === 0) {
                resolve();
                return;
            }
            reject(new Error(`Command failed${signal ? ` with signal ${signal}` : ` with exit code ${code ?? 'unknown'}`}: ${command}`));
        });
        spawnObj.stdout?.on('data', (data) => {
            console.log(data);
        });
        spawnObj.stderr?.on('data', (data) => {
            console.log(data);
        });
    });
}

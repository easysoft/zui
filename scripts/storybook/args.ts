export function getStorybookCommand(command: 'dev' | 'build' | 'test', args: string[]) {
    if (command === 'test') {
        return {
            packageName: '@playwright/test', binName: 'playwright',
            args: ['test', '--config', 'playwright.storybook.config.ts', ...args],
        };
    }
    const defaults = command === 'dev'
        ? ['--port', '6006', '--host', '127.0.0.1', '--no-open', '--exact-port']
        : ['--output-dir', 'dist/storybook'];
    return {
        packageName: 'storybook', binName: 'storybook',
        args: [command, ...defaults, '--disable-telemetry', ...args],
    };
}

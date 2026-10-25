import {describe, expect, it} from 'vitest';
import {parseServiceArgs, readServiceExtensions, serviceEnvironment} from '../../scripts/services/args';

describe('development service arguments', () => {
    it('defaults to built-in sources and leaves native arguments intact', () => {
        expect(parseServiceArgs([], {})).toEqual({extensions: undefined, args: [], help: false});
        expect(parseServiceArgs(['--', '--extension', 'one', '--port', '6321', '--extension=../path with spaces,commas', '--mode', 'custom'], {})).toEqual({
            extensions: ['one', '../path with spaces,commas'], args: ['--port', '6321', '--mode', 'custom'], help: false,
        });
        expect(parseServiceArgs(['--extensions'], {}).extensions).toBe(true);
        expect(parseServiceArgs(['--extension=one', '--extension', 'one'], {}).extensions).toEqual(['one']);
    });

    it.each([['--extension'], ['--extension='], ['--extension', '--port'], ['--extensions=false'], ['--extension', ' padded ']])('rejects malformed selection %j', (...args) => {
        expect(() => parseServiceArgs(args, {})).toThrow(/extension/i);
    });

    it.each([['--extensions', '--extension', 'one'], ['--extension', 'one', '--extensions']])('rejects conflicting selection %j', (...args) => {
        expect(() => parseServiceArgs(args, {})).toThrow(/mutually exclusive/);
    });

    it.each([['--lib=all'], ['--lib', 'buildIn'], ['--exts']])('explains migration for %j', (...args) => {
        expect(() => parseServiceArgs(args, {})).toThrow(/no longer supported.*--extension/);
    });

    it('rejects legacy environment but always allows help without discovery', () => {
        expect(() => parseServiceArgs([], {BUILD_LIBS: 'all'})).toThrow(/BUILD_LIBS/);
        expect(parseServiceArgs(['--help', '--extension', 'does-not-exist'], {BUILD_LIBS: 'all'}).help).toBe(true);
    });

    it('passes structured selection without inheriting another invocation', () => {
        const env = serviceEnvironment(['../one,two'], {ZUI_SERVICE_EXTENSIONS: 'true', KEEP: 'yes'});
        expect(readServiceExtensions(env)).toEqual(['../one,two']);
        expect(env.KEEP).toBe('yes');
        expect(readServiceExtensions(serviceEnvironment(undefined, env))).toBeUndefined();
        expect(() => readServiceExtensions({ZUI_SERVICE_EXTENSIONS: 'false'})).toThrow(/Invalid extension/);
        expect(() => readServiceExtensions({ZUI_SERVICE_EXTENSIONS: '[""]'})).toThrow(/Invalid extension/);
    });

    it('preserves native positional arguments after the option terminator', () => {
        const args = ['--grep', 'fixture', '--', '--extension', 'filename', '--help', '--lib'];
        expect(parseServiceArgs(args, {})).toEqual({extensions: undefined, args, help: false});
        expect(parseServiceArgs(['--', '--extension', 'group', ...args], {})).toEqual({extensions: ['group'], args, help: false});
    });
});

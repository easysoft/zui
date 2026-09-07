import postcss from 'postcss';
import cssnano from 'cssnano';
import {expect, test} from 'vitest';

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

import {expect, test} from 'vitest';
import {generateLibDoc} from '../../scripts/docs/lib-doc-generator';

test('renders navigation, live examples, highlighted code and links', () => {
    const html = generateLibDoc([
        '# Button',
        '',
        'https://example.com',
        '',
        '```html:example:compact',
        '<img src="@/assets/button.svg">',
        '```',
    ].join('\n'), 'button');

    expect(html).toContain('href="#button"');
    expect(html).toContain('<h1 id="button" tabindex="-1">Button</h1>');
    expect(html).toContain('href="https://example.com"');
    expect(html).toContain('<div class="example compact"><img src="/lib/button/assets/button.svg">');
    expect(html).toContain('<pre class="hljs" data-lang="html">');
    expect(html).toContain('&lt;');
});

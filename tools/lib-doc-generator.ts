import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTocDoneRight from 'markdown-it-toc-done-right';
import Token from 'markdown-it/lib/token';
import hljs from 'highlight.js';

const markdownIt: MarkdownIt = new MarkdownIt('default', {
    html: true,
    linkify: true,
    highlight: function (str: string, lang: string) {
        const [langName] = lang.split(':');
        if (langName && hljs.getLanguage(langName)) {
            try {
                return `<pre class="hljs" data-lang="${langName}"><code>${hljs.highlight(str, {language: langName, ignoreIllegals: true}).value}</code></pre>`;
            // eslint-disable-next-line no-empty
            } catch (error) {
                return `<pre data-lang="${langName}"><code class="text-red">${error}</code></pre>`;
            }
        } else {
            return `<pre class="hljs" data-lang="${langName}"><code>${markdownIt.utils?.escapeHtml(str)}</code></pre>`;
        }
    },
}).use(markdownItAnchor).use(markdownItTocDoneRight);

export function generateLibDoc(content: string): string {
    if (markdownIt.renderer) {
        if (!content.includes('[toc]\n')) {
            content = `[toc]\n\n${content}`;
        }
        const blocks = markdownIt.parse(content, {});
        const blockList = blocks.reduce<Token[]>((list, block) => {
            if (block.type === 'fence' && block.tag === 'code') {
                const [, langType, className = ''] = block.info.split(':');
                if (langType === 'example') {
                    list.push({
                        type: 'html_block',
                        tag: 'div',
                        content: `<div class="example ${className}">${block.content}</div>`,
                    } as Token);
                }
            }
            list.push(block);
            return list;
        }, []);
        return markdownIt.renderer.render(blockList, markdownIt.options, {});
    }
    return markdownIt.render(content);
}

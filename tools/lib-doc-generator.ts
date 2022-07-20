import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

const markdownIt = new MarkdownIt('default', {
    html: true,
    linkify: true,
    highlight: function (str: string, lang: string) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                   hljs.highlight(str, {language: lang, ignoreIllegals: true}).value +
                   '</code></pre>';
            // eslint-disable-next-line no-empty
            } catch (__) {}
        }
        return '<pre class="hljs"><code>' + markdownIt.utils?.escapeHtml(str) + '</code></pre>';
    },
});

export function generateLibDoc(content: string): string {
    const html = markdownIt.render(content);
    return html;
}

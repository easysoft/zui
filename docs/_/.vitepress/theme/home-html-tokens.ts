export type HtmlToken = {text: string; style: string; word?: string; dynamic?: boolean};

const styles = {
    punctuation: '--shiki-light: #24292E; --shiki-dark: #E1E4E8',
    tag: '--shiki-light: #22863A; --shiki-dark: #85E89D',
    attr: '--shiki-light: #6F42C1; --shiki-dark: #B392F0',
    string: '--shiki-light: #032F62; --shiki-dark: #9ECBFF',
};

/** Tokenize the home page's own HTML snippets with VitePress' github-light/github-dark colors. */
export function tokenizeHtml(line: string): HtmlToken[] {
    const tokens: HtmlToken[] = [];
    const pattern = /(<\/?)([\w-]+)|(\s+)([\w-]+)(?:(=)(["'])(.*?)\6)?|(\/?>)|([^<]+)/g;
    for (const [, open, tag, space, attr, equal, quote, value, close, text] of line.matchAll(pattern)) {
        if (tag) {
            tokens.push({text: open, style: styles.punctuation}, {text: tag, style: styles.tag});
        } else if (attr) {
            tokens.push({text: space + attr, style: styles.attr});
            if (!equal) continue;
            tokens.push({text: equal, style: styles.punctuation}, {text: quote, style: styles.string});
            if (attr === 'class') {
                value.split(/( )/).forEach(word => tokens.push({text: word, style: styles.string, word}));
            } else {
                tokens.push({text: value, style: styles.string});
            }
            tokens.push({text: quote, style: styles.string});
        } else {
            tokens.push({text: close ?? text, style: styles.punctuation});
        }
    }
    return tokens;
}

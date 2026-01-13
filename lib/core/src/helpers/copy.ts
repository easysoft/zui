/**
 * The map of data type to data.
 */
export type CopyDataMap = {
    text?: string | Blob;
    html?: string | Blob;
    [key: string]: string | Blob | undefined;
};

/**
 * The type of the data to copy.
 */
export type CopyContents = string | CopyDataMap | ClipboardItems;

/**
 * Copy text to clipboard using a textarea element.
 *
 * @param text - The text to copy.
 */
export function copyText(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    document.execCommand('copy');
    document.body.removeChild(textArea);
}

/**
 * Copy data to clipboard.
 *
 * @param contents - The data to copy.
 * @returns A promise that resolves when the data is copied.
 */
export async function copy(contents: CopyContents): Promise<void> {
    if (typeof contents === 'string') {
        contents = {text: contents};
    }
    const useFallback = !navigator.clipboard || !document.hasFocus();
    let fallbackText = '';
    if (Array.isArray(contents)) {
        if (useFallback) {
            for (const item of contents) {
                if (item.types.includes('text/plain')) {
                    const textBlob = await item.getType('text/plain');
                    fallbackText = await textBlob.text();
                    break;
                }
            }
        } else {
            await navigator.clipboard.write(contents);
            return;
        }
    } else {
        const data = {} as Record<string, string | Blob>;
        for (const [key, value] of Object.entries(contents)) {
            if (value === undefined) {
                continue;
            }
            let dataKey = key;
            if (dataKey === 'text') {
                dataKey = 'text/plan';
            } else if (dataKey === 'html') {
                dataKey = 'text/html';
            }
            if (useFallback && dataKey === 'text/plan') {
                fallbackText = typeof value === 'string' ? value : await value.text();
                break;
            }
            data[dataKey] = value;
        }
        if (!useFallback) {
            contents = [new ClipboardItem(data)];
        }
    }

    if (useFallback) {
        return copyText(fallbackText);
    }

    await navigator.clipboard.write(contents as ClipboardItems);
}

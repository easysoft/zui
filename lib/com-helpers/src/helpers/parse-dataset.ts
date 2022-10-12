export function parseDataset(dataset: DOMStringMap): Record<string, unknown> {
    return Object.fromEntries(Object.entries(dataset).map(([key, value]) => {
        if (typeof value === 'string') {
            try {
                value = JSON.parse(value);
            // eslint-disable-next-line no-empty
            } catch (_) {}
        }
        return [key, value];
    }));
}

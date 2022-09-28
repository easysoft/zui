/**
 * Simple object check.
 * @param item
 */
export function isObject(item: unknown): boolean {
    return !!item && typeof item === 'object' && !Array.isArray(item);
}

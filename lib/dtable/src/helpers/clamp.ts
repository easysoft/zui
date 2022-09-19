export function clamp(size: number, min?: number, max?: number): number {
    if (size) {
        if (min) {
            size = Math.max(min, size);
        }
        if (max) {
            size = Math.min(max, size);
        }
    }
    return size;
}

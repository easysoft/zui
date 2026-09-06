import {pinyin} from 'pinyin-pro';

export function normalizeSearchText(value: string): string {
    return value.toLowerCase().normalize('NFKD').replace(/u\u0308|u:/g, 'v').replace(/\p{M}/gu, '').trim();
}

/** Build once per library; typing only reads these original and phonetic values. */
export function createSearchIndex(values: (string | undefined)[]): string[] {
    const index = new Set<string>();
    for (const value of values) {
        if (!value) {
            continue;
        }
        index.add(normalizeSearchText(value));
        if (/\p{Script=Han}/u.test(value)) {
            for (const pattern of ['pinyin', 'first'] as const) {
                const spelling = pinyin(value, {pattern, type: 'array', toneType: 'none', nonZh: 'consecutive', v: true}).join('');
                index.add(normalizeSearchText(spelling).replace(/\s+/g, ''));
            }
        }
    }
    return [...index];
}

function isSubsequence(value: string, term: string): boolean {
    let position = 0;
    for (const char of term) {
        position = value.indexOf(char, position);
        if (position < 0) {
            return false;
        }
        position++;
    }
    return true;
}

/** Lower scores rank first; -1 means at least one term did not match. */
export function getSearchScore(index: string[], terms: string[]): number {
    let total = 0;
    for (const term of terms) {
        let best = Infinity;
        for (const value of index) {
            const score = value === term ? 0 : value.startsWith(term) ? 1 : value.includes(term) ? 2 : isSubsequence(value, term) ? 3 : Infinity;
            best = Math.min(best, score);
        }
        if (best === Infinity) {
            return -1;
        }
        total += best;
    }
    return total;
}

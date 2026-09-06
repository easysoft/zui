import {describe, expect, it} from 'vitest';
import {createSearchIndex, getSearchScore, normalizeSearchText} from '../../src/lib-search';

const designer = createSearchIndex(['表单设计器', '@zentao/form-designer']);
const score = (index: string[], query: string) => getSearchScore(index, normalizeSearchText(query).split(/\s+/).filter(Boolean));

describe('development library search', () => {
    it.each(['表单', 'biaodanshejiqi', 'bdsjq', 'fdes', 'FDES', 'zentao bdsjq', 'biao dan she ji qi'])(
        'finds the designer with %s', query => expect(score(designer, query)).toBeGreaterThanOrEqual(0),
    );

    it.each(['qjsdb', 'fdess', 'fdes missing', '.*', '['])('rejects unmatched or out-of-order input %s', (query) => {
        expect(score(designer, query)).toBe(-1);
    });

    it('keeps fuzzy matches within one field and returns all entries for an empty query', () => {
        expect(score(createSearchIndex(['foo', 'designer']), 'fdes')).toBe(-1);
        expect(score(designer, '   ')).toBe(0);
    });

    it('handles phrase pronunciation, mixed English, and umlaut spellings', () => {
        expect(score(createSearchIndex(['音乐播放器']), 'yinyuebofangqi')).toBe(0);
        expect(score(createSearchIndex(['AI 新版']), 'aixinban')).toBe(0);
        expect(score(createSearchIndex(['AI 新版']), 'aixb')).toBe(0);
        for (const query of ['lvseanniu', 'lüseanniu', 'lǜsèànniǔ', 'lu:seanniu']) {
            expect(score(createSearchIndex(['绿色按钮']), query)).toBe(0);
        }
    });

    it('ranks exact, prefix, and substring hits ahead of nonconsecutive matches', () => {
        const scores = ['picker', 'picker-menu', 'color-picker', 'priority-checker'].map(value => score(createSearchIndex([value]), 'picker'));
        expect(scores).toEqual([0, 1, 2, 3]);
    });
});

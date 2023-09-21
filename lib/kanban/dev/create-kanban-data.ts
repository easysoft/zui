import {faker} from '@faker-js/faker/locale/zh_CN';
import {nextGid} from '@zui/core';

import type {KanbanColOptions, KanbanItem, KanbanLaneOptions, KanbanData, KanbanItems} from '../src/main';

export function createLane(): KanbanLaneOptions {
    const name = faker.word.adjective();
    return {
        name,
        title: `${name[0].toUpperCase()}${name.substring(1)}`,
    };
}

export function createCol(): KanbanColOptions {
    const name = faker.word.noun();
    return {
        name,
        title: `${name[0].toUpperCase()}${name.substring(1)}`,
    };
}

export function createCard(): KanbanItem {
    return {
        id: nextGid(),
        title: faker.lorem.paragraph(1),
    };
}

export function createList<T = unknown, A extends unknown[] = unknown[]>(creator: (...args: A) => T, count?: number, ...args: A) {
    return Array(count || faker.number.int(10)).fill(0).map(() => creator(...args));
}

export function createKanbanData(colCount?: number, laneCount?: number, colCardCount?: number): KanbanData {
    const cols = createList(createCol, colCount ?? faker.number.int({min: 1, max: 10}));
    const lanes = createList(createLane, laneCount ?? faker.number.int({min: 1, max: 5}));
    return {
        cols,
        lanes,
        items: lanes.reduce<KanbanItems>((data, lane) => {
            data[lane.name] = cols.reduce<KanbanItems[string]>((laneData, col) => {
                laneData[col.name] = createList(createCard, colCardCount);
                return laneData;
            }, {});
            return data;
        }, {}),
    };
}

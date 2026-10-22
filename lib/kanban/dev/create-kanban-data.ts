import {faker} from '@faker-js/faker/locale/zh_CN';
import {nextGid} from '@zui/core';

import type {KanbanColOptions, KanbanItem, KanbanLaneOptions, KanbanItemsMap, KanbanDataset} from '../src/main';

export function createLane(name?: string): KanbanLaneOptions {
    const laneName = name || faker.word.noun();
    return {
        name: laneName,
        title: `${laneName[0].toUpperCase()}${laneName.substring(1)}`,
    };
}

export function createCol(name?: string): KanbanColOptions {
    const colName = name || faker.word.noun();
    return {
        name: colName,
        title: `${colName[0].toUpperCase()}${colName.substring(1)}`,
        color: faker.color.rgb(),
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

function createUniqueName(used: Set<string>): string {
    const baseName = faker.word.noun();
    let name = baseName;
    let suffix = 1;
    while (used.has(name)) {
        name = `${baseName}-${suffix++}`;
    }
    used.add(name);
    return name;
}

export function createKanbanData(colCount?: number, laneCount?: number, colCardCount?: number): KanbanDataset {
    const colNames = new Set<string>();
    const laneNames = new Set<string>();
    const cols = createList(
        () => createCol(createUniqueName(colNames)),
        colCount ?? faker.number.int({min: 1, max: 10}),
    );
    const lanes = createList(
        () => createLane(createUniqueName(laneNames)),
        laneCount ?? faker.number.int({min: 1, max: 5}),
    );
    return {
        cols,
        lanes,
        items: lanes.reduce<KanbanItemsMap>((data, lane) => {
            data[lane.name] = cols.reduce<KanbanItemsMap[string]>((laneData, col) => {
                laneData[col.name] = createList(createCard, colCardCount);
                return laneData;
            }, {});
            return data;
        }, {}),
    };
}

import {ComponentFromReact} from '@zui/core';
import {CardList as CardListReact} from '../component';
import type {CardListProps} from '../types';

export class CardList extends ComponentFromReact<CardListProps, CardListReact> {
    static NAME = 'CardList';

    static Component = CardListReact;
}

CardList.register();

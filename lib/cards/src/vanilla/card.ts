import {ComponentFromReact} from '@zui/core';
import {Card as CardReact} from '../component';

import type {CardProps} from '../types';

export class Card extends ComponentFromReact<CardProps, CardReact> {
    static NAME = 'Card';

    static Component = CardReact;

    static replace = true;
}

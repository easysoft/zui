import {ComponentFromReact} from '@zui/core';
import {Card as CardReact} from '../component';

export class Card extends ComponentFromReact<CardOptions, CardReact> {
    static NAME = 'Card';

    static Component = CardReact;
}

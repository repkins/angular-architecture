import { Component, Inject } from '@angular/core';
import {html} from './coDeckTemplate.html';
import DeckController from './DeckController';

@Component({
    providers: [ DeckController ],
    selector: '[data-co-deck]',
    template: html
})
export class CoDeck {
    public deckController: DeckController;

    constructor(@Inject(DeckController) deckController: DeckController) {
        this.deckController = deckController;
    }
}

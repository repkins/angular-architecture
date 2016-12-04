import { Component, Inject } from '@angular/core';
import {html} from './coDeckListTemplate.html';
import DeckListController from './DeckListController';

@Component({
    providers: [ DeckListController ],
    selector: '[data-co-deck-list]',
    template: html
})
export class CoDeckList {
    public deckListController: DeckListController;

    constructor(@Inject(DeckListController) deckListController: DeckListController) {
        this.deckListController = deckListController;
    }
}

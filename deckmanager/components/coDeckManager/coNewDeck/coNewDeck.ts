import { Component, Inject } from '@angular/core';
import {html} from './coNewDeckTemplate.html';
import NewDeckController from './NewDeckController';

@Component({
    providers: [ NewDeckController ],
    selector: '[data-co-new-deck]',
    template: html
})
export class CoNewDeck {
    public newDeckController: NewDeckController;

    constructor(@Inject(NewDeckController) newDeckController: NewDeckController) {
        this.newDeckController = newDeckController;
    }
}

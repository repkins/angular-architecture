import { Component, Inject } from '@angular/core';
import {html} from './coCardListTemplate.html';
import CardListController from './CardListController';

@Component({
    providers: [ CardListController ],
    selector: '[data-co-card-list]',
    template: html
})
export class CoCardList {
    public cardListController: CardListController;

    constructor(@Inject(CardListController) cardListController: CardListController) {
        this.cardListController = cardListController;
    }
}

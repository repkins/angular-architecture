import { Component, Inject } from '@angular/core';
import {html} from './coCardListFilterTemplate.html';
import CardListFilterController from './CardListFilterController';

@Component({
    providers: [ CardListFilterController ],
    selector: '[data-co-card-list-filter]',
    template: html
})
export class CoCardListFilter {
    public cardListFilterController: CardListFilterController;

    constructor(@Inject(CardListFilterController) cardListFilterController: CardListFilterController) {
        this.cardListFilterController = cardListFilterController;
    }
}

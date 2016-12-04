import { Injectable, Inject } from '@angular/core';
import {IFacadeService} from '../../../services/FacadeService/IFacadeService';
import {ICard} from '../../../../common/models/ICard';


@Injectable()
export default class CardListController {
    private facadeService:IFacadeService;

    constructor(@Inject('FacadeService') deckBuilderService:IFacadeService) {
        this.facadeService = deckBuilderService;
    }

    public getCardList():ICard[] {
        return this.facadeService.getFilteredCardList();
    }

    public toggleCard(card:ICard):void {
        this.facadeService.toggleCard(card);
    }
}

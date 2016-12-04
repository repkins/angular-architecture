import { Injectable, Inject } from '@angular/core';
import {IFacadeService} from '../../../../services/FacadeService/IFacadeService';
import {ICard} from '../../../../../common/models/ICard';

@Injectable()
export default class CardListFilterController {
    public filter:string;
    private facadeService:IFacadeService;

    constructor(@Inject('FacadeService') deckBuilderService:IFacadeService) {
        this.facadeService = deckBuilderService;
        this.filter = '';
    }

    private setFilter(filter:string):void {
        return this.facadeService.setFilter(filter);
    }
}

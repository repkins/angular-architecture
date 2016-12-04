import { Injectable, Inject } from '@angular/core';
import {IFacadeService} from '../../../services/FacadeService/IFacadeService';
import {ICard} from '../../../../common/models/ICard';
import {IDeck} from '../../../../common/models/IDeck';

@Injectable()
export default class DeckController {
    private facadeService:IFacadeService;

    constructor(@Inject('FacadeService') facadeService:IFacadeService) {
        this.facadeService = facadeService;
    }

    public getDeck():IDeck {
        return this.facadeService.getDeck();
    }

    public getChosenCards():ICard[] {
        return this.facadeService.getChosenCards();
    }

    public backToManager():void {
        return this.facadeService.backToManager();
    }
}

import { Injectable, Inject } from '@angular/core';
import {IFacadeService} from '../../../services/FacadeService/IFacadeService';

@Injectable()
export default class NewDeckController {
    private facadeService:IFacadeService;
    private deckName:string;

    constructor(@Inject('FacadeService') facadeService:IFacadeService) {
        this.facadeService = facadeService;
        this.deckName = '';
    }

    public isFormShown():boolean {
        return this.facadeService.getShowNewDeckForm();
    }

    public createNewDeck():void {
        this.facadeService.createNewDeck(this.deckName);
    }


    public hideNewDeckForm():void {
        this.facadeService.setShowNewDeckForm(false);
    }
}

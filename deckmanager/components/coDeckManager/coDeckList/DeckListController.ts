import { Injectable, Inject } from '@angular/core';
import {IFacadeService} from '../../../services/FacadeService/IFacadeService';
import {IDeck} from '../../../../common/models/IDeck';

@Injectable()
export default class DeckController {
    private facadeService:IFacadeService;

    constructor(@Inject('FacadeService') facadeService:IFacadeService) {
        this.facadeService = facadeService;
    }

    public getDecks():IDeck[] {
        return this.facadeService.getDecks();
    }

    // TODO: The following three methods should probably be in its own component, this one is getting too large.
    public addDeck():void {
        this.facadeService.setShowNewDeckForm(true);
    }

    public editDeck(deck:IDeck):void {
        this.facadeService.editDeck(deck);
    }

    public deleteDeck(deck:IDeck):void {
        this.facadeService.deleteDeck(deck);
    }
}

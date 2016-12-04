export const html:string =
    `
        <div>
            <!-- deckmanager.coNewDeck -->
            <div class="new-deck-form container" [hidden]="!newDeckController.isFormShown()">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <h2>Add new deck</h2>
                        <div class="well">
                            <div class="form-group">
                                <input [(ngModel)]="newDeckController.deckName"
                                    type="text"
                                    class="form-control"
                                    placeholder="Deck name" >
                            </div>
                            <div class="form-inline">
                                <span (click)="newDeckController.createNewDeck()"
                                    class="create-new-deck form-control btn btn-info">
                                    Create new deck
                                </span>
                                <span (click)="newDeckController.hideNewDeckForm()"
                                    class="cancel-new-deck form-control btn btn-danger">
                                    Cancel
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    `;

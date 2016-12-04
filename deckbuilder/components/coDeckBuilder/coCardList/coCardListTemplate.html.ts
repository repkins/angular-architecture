export const html:string =
    `
    <div>
        <!-- deckbuilder.coCardList -->
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <h2>Card gallery</h2>
                </div>
                <div class="col-xs-6">
                    <div class="pull-right" data-co-card-list-filter></div>
                </div>
            </div>
            <div class="card-list row">
                <div *ngFor="let card of cardListController.getCardList()"
                    (click)="cardListController.toggleCard(card)"
                    class="card text-center col-xs-12 col-sm-4 col-md-3 col-lg-2">
                    <p [ngClass]="{ 'selected': card.selected }" class="card-item">
                        <img [src]="'img/cards/'+card.image"
                        alt="{{ card.name }}">
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;


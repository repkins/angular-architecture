export const html:string =
    `
    <div>
        <!-- deckbuilder.coCardListFilter -->
        <div class="card-list-filter">
            <p>
                Filter cards by name:
                <input type="text" [(ngModel)]="cardListFilterController.filter" 
                    (ngModelChange)="cardListFilterController.setFilter($event)">
            </p>
        </div>
    </div>
    `;


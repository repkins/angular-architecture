// import directives
import { Provider } from '@angular/core';
import FacadeService from './FacadeService/FacadeService';
import DataService from './DataService/DataService';
import UIStateService from './UIStateService/UIStateService';

// provide services
const deckManagerServicesProviders:Provider[] = [
    { provide: 'DataService', useClass: DataService },
    { provide: 'UIStateService', useClass: UIStateService },
    { provide: 'FacadeService', useClass: FacadeService },
    { provide: 'window', useValue: window }
];

export default deckManagerServicesProviders;

// import directives
import { Provider } from '@angular/core';
import FacadeService from './FacadeService/FacadeService';
import DataService from './DataService/DataService';

// provide services
const deckBuilderServicesProviders:Provider[] = [
    { provide: 'DataService', useClass: DataService },
    { provide: 'FacadeService', useClass: FacadeService },
    { provide: 'window', useValue: window }
];

export default deckBuilderServicesProviders;

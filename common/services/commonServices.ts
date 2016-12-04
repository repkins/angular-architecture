// import services
import { Provider } from '@angular/core';
import PageValueExtractorService from './PageValueExtractorService/PageValueExtractorService';
import LocalStorageService from './LocalStorageService/LocalStorageService';

// provide services
const commonServicesProviders:Provider[] = [
    { provide: 'PageValueExtractorService', useClass: PageValueExtractorService },
    { provide: 'LocalStorageService', useClass: LocalStorageService }
];

export default commonServicesProviders;

///<reference path="../typings/tsd.d.ts"/>
import { NgModule } from '@angular/core';
import commonServicesProviders from './services/commonServices';
import commonDirectives from './components/commonDirectives';

export const appName:string = 'common';

@NgModule({
  declarations: [
    ...commonDirectives
  ],
  exports: [
    ...commonDirectives
  ],
  providers: [
    ...commonServicesProviders
  ]
})
export class CommonModule {}

///<reference path="../typings/tsd.d.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule as CommonAppModule } from './../common/main';
import deckManagerDirectives, { CoDeckManager } from './components/deckManagerDirectives';
import deckManagerServicesProviders from './services/deckManagerServices';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// app name
export const appName:string = 'deckManagerApp';

// register module, directives, services, etc.
@NgModule({
    bootstrap: [ CoDeckManager ],
    declarations: [
        ...deckManagerDirectives
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,

        CommonAppModule
    ],
    providers: [
        ...deckManagerServicesProviders
    ]
})
class DeckManagerModule {}

// bootstrap Angular
platformBrowserDynamic().bootstrapModule(DeckManagerModule);

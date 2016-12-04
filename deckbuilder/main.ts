///<reference path="../typings/tsd.d.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule as CommonAppModule } from './../common/main';
import deckBuilderDirectives, { CoDeckBuilder } from './components/deckBuilderDirectives';
import deckBuilderServicesProviders from './services/deckBuilderServices';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// app name
export const appName:string = 'deckApp';

// register module, directives, services, etc.
@NgModule({
    bootstrap: [ CoDeckBuilder ],
    declarations: [
        ...deckBuilderDirectives
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,

        CommonAppModule
    ],
    providers: [
        ...deckBuilderServicesProviders
    ]
})
class DeckBuilderModule {}

// bootstrap Angular
platformBrowserDynamic().bootstrapModule(DeckBuilderModule);

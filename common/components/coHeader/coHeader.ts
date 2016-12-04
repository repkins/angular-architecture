import { Component, Input } from '@angular/core';
import {html} from './coHeaderTemplate.html';

@Component({
    selector: '[data-co-header]',
    template: html
})
export class CoHeader {
    @Input('data-title-text') public titleText: string;
}

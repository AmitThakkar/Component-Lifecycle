/**
 * Created by amitthakkar on 21/08/16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ParentComponent} from './parent.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ParentComponent],
    bootstrap: [ParentComponent]
})
export class AppModule {
}
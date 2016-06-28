/**
 * Created by amitthakkar on 23/06/16.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
       Hello World
    `
})
export class AppComponent implements OnInit {
    constructor() {
        console.log('I am constructor');
    }

    ngOnInit() {
        console.log('I am ngOnInit');
    }
}
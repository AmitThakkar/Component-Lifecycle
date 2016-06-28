/**
 * Created by amitthakkar on 23/06/16.
 */
import {Component, OnInit, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
       Hello World
    `
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    constructor() {
        console.log('I am constructor');
    }

    ngOnChanges() {
        console.log('I am ngOnChanges');
    }

    ngOnInit() {
        console.log('I am ngOnInit');
    }

    ngAfterViewInit() {
        console.log('I am ngAfterViewInit');
    }

    ngOnDestroy() {
        console.log('I am ngOnDestroy');
    }
}
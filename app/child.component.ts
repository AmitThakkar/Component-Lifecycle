/**
 * Created by amitthakkar on 23/06/16.
 */
import {Component, OnInit, OnChanges, AfterViewInit, OnDestroy, Input} from '@angular/core';

@Component({
    selector: 'child-component',
    template: `
       <div>Hello From Child Component! Name: {{name}}</div>
    `
})
export class ChildComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    @Input() name:string;

    constructor() {
        console.log('I am Child constructor');
    }

    ngOnChanges() {
        console.log('I am Child ngOnChanges');
    }

    ngOnInit() {
        console.log('I am Child ngOnInit');
    }

    ngAfterViewInit() {
        console.log('I am Child ngAfterViewInit');
    }

    ngOnDestroy() {
        console.log('I am Child ngOnDestroy');
    }
}
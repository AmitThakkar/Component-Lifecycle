/**
 * Created by amitthakkar on 23/06/16.
 */
import {Component, OnInit, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';
import {ChildComponent} from "./child.component";

@Component({
    selector: 'parent-component',
    template: `
       Hello World Form Parent Component! Name: {{name}}
       <child-component [name]="name"></child-component>
    `,
    directives: [ChildComponent]
})
export class ParentComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    name:string = 'Amit Thakkar';

    constructor() {
        console.log('I am Parent constructor');
    }

    ngOnChanges() {
        console.log('I am Parent ngOnChanges');
    }

    ngOnInit() {
        console.log('I am Parent ngOnInit');
    }

    ngAfterViewInit() {
        console.log('I am Parent ngAfterViewInit');
    }

    ngOnDestroy() {
        console.log('I am Parent ngOnDestroy');
    }
}
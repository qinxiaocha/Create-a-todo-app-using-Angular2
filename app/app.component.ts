import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';
import {Control} from './angular2/common';
import {TodoList} from './todo-list';
import {StatusSelector} from './status-selector';


@Component({
    selector: 'my-app',
    directives:[TodoInput, TodoList, StatusSelector,SearchPipe],
    template: `<div><todo-input></todo-input><status-selector (select)="status = $event"></status-selector><todo-list [status]="status"></todo-list></div>`
})
export class AppComponent { }
import {Component,Input} from 'angular2/core';
import {TodoService} from './todo-service';
import {TodoItemRender} from './todo-item-render';
import {StartedPipe} from "./started-pipe";
import {SearchPipe} from "./search-pipe";

@Component({
	selector:'todo-list',
	pipes:[StartedPipe, SearchPipe],
	directives:[TodoItemRender],
	template:`<div><ul><li *ngFor="#todo of todoService.todos | started: status | search"><todo-item-render  [todo]="todo" (toggle)="todoService.toggleTodo($event)"></todo-item-render></li></ul></div>`
})

export class TodoList{
	@Input() status;
	constructor(public todoService:TodoService){}
}
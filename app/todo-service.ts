import {Injectable} from 'angular2/core';
import {TodoModel} from './todo-model';

@Injectable()

export class TodoService{
	todos = [new TodoModel("eat"),
			new TodoModel("sleep"),
			new TodoModel("code"),
            new TodoModel("dance","completed"),
            new TodoModel("play","completed"),
            new TodoModel("party","completed"),
            new TodoModel("recs"),
            new TodoModel("exercise","completed"),
            new TodoModel("work","completed"),
            new TodoModel("earn"),
			];

	addTodo(todo:TodoModel){
		this.todos = [...this.todos,todo];
	}

	toggleTodo(todo.TodoModel){
		todo.toggle();
 
        const i = this.todos.indexOf(todo);

		this.todos = [...this.todos.slice(0,i),todo,...this.todos.slice(i+1)];
	}
}
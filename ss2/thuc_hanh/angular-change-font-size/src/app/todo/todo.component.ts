import {Component, OnInit} from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from "../service/todo.service";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService:TodoService) {
  }

  ngOnInit() {
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }
  getAllTodo(){
    this.todoService.getAll().subscribe(data => {
      this.todos = data ;
    }, error => {
      console.log(error);
    });
  }

  deleteTodo(id: number) {
    this.todoService.delete(id).subscribe(() => {
      console.log('success!');
      this.getAllTodo();
    }, err => {
      console.log(err);
    });
  }
}

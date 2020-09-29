import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

//Class for todo
export class Todo{
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] 
  // = [
  //   new Todo(1,'Learn to Dance', false, new Date()),
  //   new Todo(2,'Pay the bills', false, new Date()),
  //   new Todo(3,'Go to Essen', false, new Date())
  //   // {id: 1, description: 'Learn to Dance'},
  //   // {id: 2, description: 'Pay the bills'},
  //   // {id: 3, description: 'Go to Essen'}
  // ]

/* todo = {
  id: 1,
  description: 'Learn to Dance'
} */

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos('ramsses').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }

    )
  }

}

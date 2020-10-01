import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  message: string;
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
    private todoService:TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

refreshTodos(){
  this.todoService.retrieveAllTodos('ramsses').subscribe(
    response =>{
      console.log(response);
      this.todos = response;
    }

  )
}

deleteTodo(id: number){
  console.log(`delete todo ${id}`);
  this.todoService.deleteTodo('ramsses',id).subscribe(
    response => {
      console.log(response);
      this.message = `Delete of Todo ${id} Successful!`;
      this.refreshTodos();
    }
  )
}

updateTodo(id: number){
  console.log(`update ${id}`);
  this.router.navigate(['todos',id]);
}

addTodo(){
  console.log(`Create new Todo`); 
  this.router.navigate(['todos',-1]);
}



}

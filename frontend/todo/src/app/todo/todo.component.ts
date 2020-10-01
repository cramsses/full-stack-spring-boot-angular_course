import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1,'',false,new Date());
    console.log('id = '+this.id)
    this.todoService.retrieveTodo('ramsses', this.id)
    .subscribe(
      
      data => {
        this.todo = data;
      }
    );
  }

  saveTodo(){

    this.todoService.updateTodo('ramsses',this.id,this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/todos'])
      }
    );

  }

}

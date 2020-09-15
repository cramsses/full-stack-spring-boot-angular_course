import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'Learn to Dance'},
    {id: 2, description: 'Pay the bills'},
    {id: 3, description: 'Go to Essen'}
  ]

/* todo = {
  id: 1,
  description: 'Learn to Dance'
} */

  constructor() { }

  ngOnInit(): void {
  }

}

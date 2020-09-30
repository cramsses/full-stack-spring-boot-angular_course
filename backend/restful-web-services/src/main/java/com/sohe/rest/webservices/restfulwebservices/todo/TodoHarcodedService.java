package com.sohe.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


//@Component
@Service
public class TodoHarcodedService {
	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "ramsses", "Learn Something", new Date(), false));
		todos.add(new Todo(++idCounter, "ramsses", "Learn Angular 2", new Date(), false));
		todos.add(new Todo(++idCounter, "ramsses", "Learn Microservices", new Date(), false));
	}
	
	public List <Todo> findAll(){
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId() ==-1) {
			//Insert
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			//Update
			deleteById(todo.getId());
			todos.add(todo);
		}
		
		return todo;
		
	}
	
	public Todo deleteById(long id) {
		Todo todo = finById(id);
		if(todo==null) return null;
		if(	todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo finById(long id) {
		
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}

		return null;
	}
	

}

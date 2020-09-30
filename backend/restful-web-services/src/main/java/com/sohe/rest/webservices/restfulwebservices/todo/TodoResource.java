package com.sohe.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sohe.rest.webservices.restfulwebservices.todo.Todo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {
	
	@Autowired
	private TodoHarcodedService todoService;

	@GetMapping(path = "/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username,@PathVariable long id){
		
		return todoService.finById(id);
	}
	
	@GetMapping(path = "/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		
		return todoService.findAll();
	}
	
	//DELETE /users/{user_name}/todos/{todo_id}
	@DeleteMapping(path = "/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(
			@PathVariable String username,@PathVariable long id) {
		Todo todo = todoService.deleteById(id);
		if (todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
//	Edit/Update a Todo
//	PUT /users/{user_name}/todos/{todo_id}
	@PutMapping(path = "/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username,
			@PathVariable long id, 
			@RequestBody Todo todo) {
		Todo todoUpdated = todoService.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	
	
	
	
//	Create a new Todo
//	POST /users/{user_name}/todos/
	
}

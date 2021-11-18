import './styles.css';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

import { Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender Javascript !!');
// tarea.completado = true;
// todoList.nuevoTodo(tarea);
// crearTodoHtml(tarea);

// todoList.todos.forEach(todo =>{
//     crearTodoHtml(todo);
// });

todoList.todos.forEach(crearTodoHtml);
// todoList.todos[0].imprimirClase();

console.log('todos',todoList.todos);

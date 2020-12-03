import './styles.css';
import {TodoList, Todo} from './classes'
import {creatTodoHtml} from './js/componentes'

export const todoList = new  TodoList();

todoList.todos.forEach(creatTodoHtml);

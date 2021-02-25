import { sendTodo, getTodo } from './components/sendTodo.js'

const d = document

d.addEventListener('DOMContentLoaded', () => {
  getTodo('todo-list')
  sendTodo('form-todo', 'todo-list')
})

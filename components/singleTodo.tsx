import { Dispatch } from 'react'
import { Todo } from '../pages'
import styles from '../styles/Home.module.css'

type Props = {
  todos: Todo[]
  todo: Todo
  setTodos: Dispatch<Todo[]>
}

const SingleTodo = (props: Props) => {
  const toggleIsCompleted = (id: number) => {
    const newTodos = props.todos.map(todo => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted
      return todo
    })
    props.setTodos(newTodos)
  }
  const deleteTodo = (id: number) => {
    props.setTodos(props.todos.filter(todo => todo.id !== id))
  }
  return (
    <li
      key={props.todo.id}
      className={props.todo.isCompleted ? styles.completedTodo : ''}
    >
      <input
        type='checkbox'
        checked={props.todo.isCompleted}
        onChange={() => toggleIsCompleted(props.todo.id)}
      />
      {props.todo.title}
      <button onClick={() => deleteTodo(props.todo.id)}>X</button>
    </li>
  )
}

export default SingleTodo

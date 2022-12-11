import React, { useState } from 'react'
import SingleTodo from '../components/singleTodo'
import styles from '../styles/Home.module.css'

export type Todo = {
  id: number
  title: string
  isCompleted: boolean
}
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, title: 'laundry', isCompleted: false }
  ])

  return (
    <div className={styles.container}>
      <h1>todo list</h1>

      <ul>
        {todos.map(todo => (
          <SingleTodo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  )
}

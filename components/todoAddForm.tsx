import { Dispatch, useState } from 'react'
import { Todo } from '../pages'

type Props = {
  // FIXME: type error
  setTodos: Dispatch<Todo[]>
}

const TodoAddForm = (props: Props) => {
  const [title, setTitle] = useState('')
  const [id, setId] = useState(1)
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title === '') return
    props.setTodos(todos => [...todos, { id, title, isCompleted: false }])
    setId(id + 1)
    setTitle('')
  }
  return (
    <form onSubmit={addTodo}>
      <input
        type='text'
        placeholder='todo'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      {/* <button type='submit'>Add</button> */}
    </form>
  )
}

export default TodoAddForm

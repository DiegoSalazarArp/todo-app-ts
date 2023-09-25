// import { useState } from 'react'
import { useState } from 'react'
import { Todos } from './components/Todos'

export const mockTodos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: true
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false
  }
]

function App () {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos} />
    </div>
  )
}

export default App

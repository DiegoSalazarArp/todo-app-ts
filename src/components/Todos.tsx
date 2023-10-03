import { type TodoId, type TodoList as ListOfTodos, type Todo as TodoType } from '../type'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <>
      <ul className='todo-list'>
        {todos.map(todo => (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
            <Todo
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
              onToggleCompleted={onToggleCompleted}
              onRemoveTodo={onRemoveTodo}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

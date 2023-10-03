import { type TodoTitle } from '../type'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>Todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" alt="" />

      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}

import { type TodoId, type Todo as TodoType } from '../type'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, completed, title, onRemoveTodo, onToggleCompleted }) => {
  return (
    <>
      <div className="view">
        <input
          className="toggle"
          checked={completed}
          type="checkbox"
          onChange={(event) => {
            onToggleCompleted({ id, completed: event.target.checked })
          }}
        />

        <label>{title}</label>
        <button
          className='destroy'
          onClick={() => {
            onRemoveTodo({ id })
          }}
        >

        </button>
      </div>
    </>
  )
}

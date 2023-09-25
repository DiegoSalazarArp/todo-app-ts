import { type Todo as TodoType } from '../type'

interface Props extends TodoType {
  onRemoveTodo: (id: number) => void
}

export const Todo: React.FC<Props> = ({ id, completed, title, onRemoveTodo }) => {
  return (
    <>
      <div className="view">
        <input
          className="toggle"
          checked={completed}
          type="checkbox"
          onChange={() => {}}
        />

        <label>{title}</label>
        <button
          className='destroy'
          onClick={() => {
            onRemoveTodo(id)
          }}
        >

        </button>
      </div>
    </>
  )
}

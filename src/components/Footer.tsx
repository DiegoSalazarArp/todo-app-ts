import React from 'react'
import { Filters } from './Filters'
import { type FilterValue } from '../type'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filters: FilterValue) => void

}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas pendientes
      </span>

      <Filters
        filteredSelected={filterSelected}
        onFilterChange={handleFilterChange}

      />

      {
        completedCount > 0 && (
          <button
            className='clear-completed'
            onClick={onClearCompleted}
          >
              Borrar completados
          </button>
        )
      }
    </footer>
  )
}

import { type FilterValue } from '../type'
import { FILTERS_BUTTONS } from './const'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filteredSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ filteredSelected, onFilterChange }) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filteredSelected
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
                <a
                  href={href}
                  className={className}
                  onClick={(event) => {
                    event.preventDefault()
                    onFilterChange(key as FilterValue)
                  }}
                >
                  {literal}
                </a>
            </li>
          )
        })
      }

    </ul>
  )
}

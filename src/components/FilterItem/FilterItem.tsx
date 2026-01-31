import classNames from 'classnames';
import { Filter, FilterItemProps } from '../../types';

export const FilterItem: React.FC<FilterItemProps> = ({
  filter,
  filteredBy,
  setFilteredBy,
}) => (
  <a
    href={`#/${filter === Filter.All ? '' : filter.toLowerCase()}`}
    key={filter}
    className={classNames('filter__link', {
      selected: filteredBy === filter,
    })}
    data-cy={`FilterLink${filter}`}
    onClick={() => setFilteredBy(filter)}
  >
    {filter}
  </a>
);

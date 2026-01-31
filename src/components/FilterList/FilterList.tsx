import { Filter, FilterListProps } from '../../types';
import { FilterItem } from '../FilterItem';

export const FilterList: React.FC<FilterListProps> = ({
  filteredBy,
  setFilteredBy,
}) => (
  <nav className="filter" data-cy="Filter">
    {Object.values(Filter).map((filter: Filter) => (
      <FilterItem
        key={filter}
        filteredBy={filteredBy}
        setFilteredBy={setFilteredBy}
        filter={filter}
      />
    ))}
  </nav>
);

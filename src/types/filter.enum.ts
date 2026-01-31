export enum Filter {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

export type FilterListProps = {
  filteredBy: Filter;
  setFilteredBy: React.Dispatch<React.SetStateAction<Filter>>;
};

export type FilterItemProps = FilterListProps & {
  filter: Filter;
};

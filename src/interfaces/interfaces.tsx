import {Recipe} from '../types/Recipes';

export interface SearchBarProps {
  handleSearch: (search: Recipe) => void;
  placeholder: string;
}

export interface ListItemProps {
  image: string;
  title: string;
  index: number;
}

export interface HorizontalListProps<T> {
  data: T[];
  renderItem: ({item}: {item: T}) => React.ReactNode;
}

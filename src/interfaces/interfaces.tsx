export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export interface ListItemProps {
  image: string;
  title: string;
  subtitle: string;
}

export interface HorizontalListProps<T> {
  data: T[];
  renderItem: ({item}: {item: T}) => React.ReactNode;
}

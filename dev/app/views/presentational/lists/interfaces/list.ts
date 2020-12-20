import { ListItem } from './list_item';
import { DescriptionListItem } from './description_list_item';

export interface List<T extends ListItem | DescriptionListItem> {
  title: string;
  items: T[];
}

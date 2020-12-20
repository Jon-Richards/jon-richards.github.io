import { ListItem } from './list_item';

export interface DescriptionListItem extends ListItem {
  type: 'TERM' | 'DESCRIPTION';
}

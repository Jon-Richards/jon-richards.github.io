import * as React from 'react';
import { List } from '../interfaces/list';
import { ListItem } from '../interfaces/list_item';

export function OrderedList(props: OrderedListProps): JSX.Element {
  const items = mapItems(props.items);
  return (
    <ol title={props.title}>
      {items}
    </ol>
  )
}

export type OrderedListProps = List<ListItem>;

function mapItems(items: ListItem[]): JSX.Element {
  const result = items.map(item => <li key={item.id}>{item.content}</li>);
  return <React.Fragment>{result}</React.Fragment>
}

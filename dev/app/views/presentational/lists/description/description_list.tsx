import * as React from 'react';
import { List } from '../interfaces/list';
import { DescriptionListItem } from '../interfaces/description_list_item';

export function DescriptionList(props: DescriptionListProps): JSX.Element {
  const items = mapItems(props.items);
  return (
    <dl title={props.title}>
      {items}
    </dl>
  )
}

type DescriptionListProps = List<DescriptionListItem>;

function mapItems(items: DescriptionListItem[]): JSX.Element {
  const result = items.map(item => {
    if (item.type === 'TERM') {
      return createTerm(item);
    } else {
      return createDescription(item);
    }
  });
  return <React.Fragment>{result}</React.Fragment>
}

function createTerm(item: DescriptionListItem): JSX.Element {
  return <dt key={item.id}>{item.content}</dt>
}

function createDescription(item: DescriptionListItem): JSX.Element {
  return <dd key={item.id}>{item.content}</dd>
}

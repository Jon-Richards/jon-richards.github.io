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
      return createDescriptionTerm(item);
    } else {
      return createDescriptionListItem(item);
    }
  });
  return <React.Fragment>{result}</React.Fragment>
}

function createDescriptionTerm(item: DescriptionListItem): JSX.Element {
  return <dt key={item.id}>{item.content}</dt>
}

function createDescriptionListItem(item: DescriptionListItem): JSX.Element {
  return <dd key={item.id}>{item.content}</dd>
}

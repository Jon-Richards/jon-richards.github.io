/** @jsx jsx */

import * as React from 'react';
import { List } from '../interfaces/list';
import { ListItem } from '../interfaces/list_item';
import { jsx } from '@emotion/core';
import { STYLES } from './styles';

export function UnorderedList(props: UnorderedListProps): JSX.Element {
  const items = mapItems(props.items);
  return (
    <ul title={props.title} data-testid="unordered-list" css={STYLES.list}>
      {items}
    </ul>
  )
}

export type UnorderedListProps = List<ListItem>;

function mapItems(items: ListItem[]): JSX.Element {
  const result = items.map(item => (
    <li key={item.id} data-testid="unordered-list__item" css={STYLES.item}>
      {item.content}
    </li>
  ));
  return <React.Fragment>{result}</React.Fragment>
}

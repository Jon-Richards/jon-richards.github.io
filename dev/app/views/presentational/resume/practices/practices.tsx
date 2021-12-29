import * as React from 'react';
import { Article } from '../article';
import { UnorderedList, ListItem } from 'Views/presentational/lists';

export function Practices(props: PracticeProps): JSX.Element {
  const title = 'Practices';
  const practices = mapPractices(props.practices);

  return (
    <Article title={title}>
      <UnorderedList title={title} items={practices} />
    </Article>
  );
}

export interface PracticeProps {
  practices: Practice[];
}

type Practice = {
  id: string;
  name: string;
};

function mapPractices(practices: Practice[]): ListItem[] {
  return (practices.map(practice => ({
    id: practice.id,
    content: practice.name
  })));
}


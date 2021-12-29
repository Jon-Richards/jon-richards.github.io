/** @jsx */

import * as React from 'react';
import { Article } from '../article';
import { Language } from '../interfaces/language';
import { UnorderedList, ListItem } from 'Views/presentational/lists';

export function Languages(props: LanguagesProps): JSX.Element {
  const title = 'Languages';
  const items = mapLanguagesToListItems(props.languages);

  return (
    <Article title={title}>
      <UnorderedList title={title} items={items} />
    </Article>
  );
}

export interface LanguagesProps {
  languages: Language[];
}

function mapLanguagesToListItems(languages: Language[]): ListItem[] {
  return languages.map(language => ({
    id: language.id,
    content: language.name
  }));
}


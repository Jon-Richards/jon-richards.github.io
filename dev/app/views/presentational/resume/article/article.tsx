/** @jsx jsx */

import * as React from 'react';
import { Panel } from 'Views/presentational/panel';
import { jsx } from '@emotion/core';
import { STYLES } from './styles';

export function Article(props: ArticleProps): JSX.Element {
  return (
    <article css={STYLES.article} data-testid="article">
      <Panel>
        <div css={STYLES.content}>
          <h3 data-testid="article__title" css={STYLES.title}>
            {props.title}
          </h3>
          <div data-testid="article__children">
            {props.children}
          </div>
        </div>
      </Panel>
    </article>
  );
}

export type ArticleProps = React.PropsWithChildren<{
  title: string;
}>;

/** @jsx jsx */

import * as React from 'react';
import { Panel } from 'Views/presentational/panel';
import { jsx } from '@emotion/core';
import { STYLES } from './styles';

export function ResumeArticle(props: ResumeArticleProps): JSX.Element {
  return (
    <article css={STYLES.article} data-testid="resume-article">
      <Panel>
        <div css={STYLES.content}>
          <h3 data-testid="resume-article__title" css={STYLES.title}>
            {props.title}
          </h3>
          <div data-testid="resume-article__children">
            {props.children}
          </div>
        </div>
      </Panel>
    </article>
  );
}

export type ResumeArticleProps = React.PropsWithChildren<{
  title: string;
}>;

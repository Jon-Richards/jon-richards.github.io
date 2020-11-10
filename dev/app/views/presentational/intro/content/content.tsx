/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { STYLES } from './styles';
import { Skills, SkillsProps } from './skills';

type ContentProps = {
  /** The intro title. */
  title: React.ReactFragment;
  /** The subtitle. */
  subtitle: React.ReactFragment;
  /** A list of skills. */
  skills: SkillsProps['skills'];
};

/** Renders the content for the intro section. */
function Content (props: ContentProps) {
  const {
    title,
    subtitle,
    skills,
  } = props;

  return (
    <div css={css(STYLES.content)}>
      <div css={css(STYLES.headline)}>
        <h1 css={css(STYLES.title)}>{title}</h1>
        <h2 css={css(STYLES.subtitle)}>{subtitle}</h2>
      </div>
      {skills.length > 0 && (
        <div css={css(STYLES.children)} data-testid="intro_content_skills">
          <Skills skills={skills} />
        </div>
      )}
    </div>
  );
}

const contentMemo = React.memo<ContentProps>(Content);

export { contentMemo as Content, ContentProps };

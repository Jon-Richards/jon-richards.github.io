import * as React from 'react';
const CSS = require('./content.scss');
import { SkillFilters, SkillFilter } from './skill_filters';

type Props = {
  /** The intro title. */
  title: React.ReactFragment;
  /** The subtitle. */
  subtitle: React.ReactFragment;
  /** Array of skills by which portfolio pieces can be ordered. */
  skills?: SkillFilter[];
};

/** Renders the content for the intro section. */
function IntroContent(props: Props) {
  const { 
    title,
    subtitle,
    skills = []
  } = props;

  return (
    <div className={CSS['content']}>
      <div className={CSS['headline']}>
        <h1 className={CSS['title']}>{title}</h1>
        <h2 className={CSS['subtitle']}>{subtitle}</h2>
      </div>
      <div className={CSS['skills']}>
        <SkillFilters skills={skills} />
      </div>
    </div>
  );
}

const introContentMemo = React.memo<Props>(IntroContent);

export { introContentMemo as IntroContent };
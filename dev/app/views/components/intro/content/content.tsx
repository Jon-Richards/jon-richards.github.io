import * as React from 'react';
const CSS = require('./content.scss');
import { Skills, SkillsProps} from './skills';

type ContentProps = {
  /** The intro title. */
  title: React.ReactFragment;
  /** The subtitle. */
  subtitle: React.ReactFragment;
  /** A list of skills. */
  skills: SkillsProps['skills'];
};

/** Renders the content for the intro section. */
function Content(props: ContentProps) {
  const { 
    title,
    subtitle,
    skills,
  } = props;

  return (
    <div className={CSS['content']}>
      <div className={CSS['headline']}>
        <h1 className={CSS['title']}>{title}</h1>
        <h2 className={CSS['subtitle']}>{subtitle}</h2>
      </div>
      {skills.length > 0 && (
        <div className={CSS['children']}>
          <Skills skills={skills} />
        </div>
      )}
    </div>
  );
}

const contentMemo = React.memo<ContentProps>(Content);

export { contentMemo as Content, ContentProps };
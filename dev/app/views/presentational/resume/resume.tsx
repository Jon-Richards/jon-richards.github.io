/** @jsx jsx */

import { Occupation } from './interfaces/occupation';
import { Tool } from './interfaces/tool';
import { Language } from './interfaces/language';
import { Practice } from './interfaces/practice';
import { WorkExperience } from './work_experience';
import { Languages } from './languages';
import { Practices } from './practices';
import { STYLES } from './styles';
import { jsx } from '@emotion/core';

export function Resume(props: ResumeProps): JSX.Element {
  return (
    <section css={STYLES.root}>
      <WorkExperience occupations={props.occupations} />
      <Languages languages={props.languages} />
      <Practices practices={[
        { id: 'abc', name: 'OOP' },
        { id: 'def', name: 'SCRUM' },
        { id: 'ghi', name: 'TDD' },
        { id: 'jkl', name: 'AGILE' }
      ]} />
    </section>
  );
}

export type ResumeProps = {
  occupations: Occupation[];
  tools: Tool[];
  languages: Language[];
  practices: Practice[];
}

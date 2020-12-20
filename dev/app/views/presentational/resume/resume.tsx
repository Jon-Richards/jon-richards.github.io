/** @jsx jsx */

import * as React from 'react';
import { Occupation } from './interfaces/occupation';
import { Tool } from './interfaces/tool';
import { Language } from './interfaces/language';
import { Practice } from './interfaces/practice';
import { WorkExperience } from './work_experience';
import { STYLES } from './styles';
import { jsx } from '@emotion/core';

export function Resume(props: ResumeProps): JSX.Element {
  return (
    <section css={STYLES.root}>
      <WorkExperience occupations={props.occupations} />
    </section>
  );
}

export type ResumeProps = {
  occupations: Occupation[];
  tools: Tool[];
  languages: Language[];
  practices: Practice[];
}

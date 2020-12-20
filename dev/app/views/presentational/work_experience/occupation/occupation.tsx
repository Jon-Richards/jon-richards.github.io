/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';
// import { List } from 'Views/presentational/list';
import { STYLES } from './styles';

export function Occupation(props: OccupationProps): JSX.Element {
  return (
    <React.Fragment>
      <dt
        data-testid="occupation__job-title"
        css={STYLES.jobTitle}
      >
        {props.jobTitle}
      </dt>
      <dd
        data-testid="occupation__job-description"
        css={STYLES.description}
      >
        <p css={STYLES.organization}>{props.organization}</p>
        <p css={STYLES.date}>{props.startDate} - {props.endDate}</p>
        <ul>
          {mapResponsabilities(props.responsabilities)}
        </ul>
      </dd>
    </React.Fragment>
  );
}

export type OccupationProps = {
  organization: string,
  startDate: string,
  endDate: string,
  jobTitle: string,
  responsabilities: responsibility[];
}

type responsibility = {
  id: string;
  text: string
};

function mapResponsabilities(respnsabilities: responsibility[]): JSX.Element {
  const result = respnsabilities.map(responsibility =>
    <li
      key={responsibility.id}
      data-testid="occupation__responsibility"
      css={STYLES.responsibility}
    >
      {responsibility.text}
    </li>
  );
  return <React.Fragment>{result}</React.Fragment>
}

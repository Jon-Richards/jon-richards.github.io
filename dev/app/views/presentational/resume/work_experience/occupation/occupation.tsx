/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';
import { STYLES } from './styles';
import { Occupation as IOccupation } from '../../interfaces/occupation';
import { Responsibility } from '../../interfaces/responsibility';
import { UnorderedList } from 'Views/presentational/lists';

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
        <UnorderedList
          title="Responsibilities"
          items={mapResponsabilities(props.responsibilities)}
        />
      </dd>
    </React.Fragment>
  );
}

export type OccupationProps = Omit<IOccupation, 'id'>;

function mapResponsabilities(respnsabilities: Responsibility[]) {
  const result = respnsabilities.map(responsibility => (
    {
      id: responsibility.id,
      content: responsibility.description
    }
  ));
  return result;
}

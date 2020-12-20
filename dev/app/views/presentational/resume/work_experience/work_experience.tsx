import * as React from 'react';
import { Occupation } from './occupation';
import { Occupation as IOccupation } from '../interfaces/occupation';
import { Article } from 'Views/presentational/resume/article';

export function WorkExperience(props: WorkExperienceProps): JSX.Element {
  return (
    <Article title="Work Experience">
      <dl title="Work Experience">
        {mapOccupations(props.occupations)}
      </dl>
    </Article>
  );
}

export type WorkExperienceProps = {
  occupations: IOccupation[];
}

function mapOccupations(occupations: IOccupation[]): JSX.Element {
  const jobs = occupations.map(occupation => {
    return (
      <Occupation
        key={occupation.id}
        jobTitle={occupation.jobTitle}
        startDate={occupation.startDate}
        endDate={occupation.endDate}
        organization={occupation.organization}
        responsibilities={occupation.responsibilities}
      />
    );
  });
  return <React.Fragment>{jobs}</React.Fragment>
}

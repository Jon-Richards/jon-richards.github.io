import * as React from 'react';
import { Occupation } from './occupation';
import { ResumeArticle } from 'Views/presentational/resume_article';

export function WorkExperience(props: WorkExperienceProps): JSX.Element {
  return (
    <ResumeArticle title="Work Experience">
      <dl title="Work Experience">
        {mapOccupations(props.occupations)}
      </dl>
    </ResumeArticle>
  );
}

export type WorkExperienceProps = {
  occupations: WorkOccupation[];
}

export type WorkOccupation = {
  id: string;
  jobTitle: string;
  organization: string;
  startDate: string;
  endDate: string;
  responsabilities: responsibility[];
}

export type responsibility = {
  id: string;
  text: string;
};

function mapOccupations(occupations: WorkOccupation[]): JSX.Element {
  const jobs = occupations.map(occupation => {
    return (
      <Occupation
        key={occupation.id}
        jobTitle={occupation.jobTitle}
        startDate={occupation.startDate}
        endDate={occupation.endDate}
        organization={occupation.organization}
        responsabilities={occupation.responsabilities}
      />
    );
  });
  return <React.Fragment>{jobs}</React.Fragment>
}

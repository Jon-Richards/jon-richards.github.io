import * as React from 'react';
import { WorkExperience, WorkOccupation } from './work_experience';
import { render } from 'enzyme';

describe('The WorkExperience component.', () => {
  it('Should match the snapshot.', () => {
    const occupations: WorkOccupation[] = [
      {
        id: 'one',
        jobTitle: 'Sr. UI Developer',
        organization: 'Some Org.',
        startDate: 'Jan 1, 2021',
        endDate: 'Dec 31, 2021',
        responsabilities: [
          { id: 'one', text: 'Developed component libraries.' },
          { id: 'two', text: 'Maintained legacy code.' }
        ]
      }
    ]

    const wrapper = render(
      <WorkExperience occupations={ occupations } />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Renders an occupation for each one provided.', () => {
    const occupations: WorkOccupation[] = [
      {
        id: 'one',
        jobTitle: 'Sr. UI Developer',
        organization: 'Some Org.',
        startDate: 'Jan 1, 2021',
        endDate: 'Dec 31, 2021',
        responsabilities: [
          { id: 'one', text: 'Developed component libraries.' },
          { id: 'two', text: 'Maintained legacy code.' }
        ]
      }
    ]

    const wrapper = render(
      <WorkExperience occupations={ occupations } />
    );

    const testHook = '[data-testid="occupation__job-title"]';

    expect(wrapper.find(testHook).length).toBe(1);
  });
});

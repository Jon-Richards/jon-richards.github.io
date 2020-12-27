import * as React from 'react';
import { render } from 'enzyme';
import { Resume } from './resume';

describe('The Resume component.', () => {
  it('Matches the snapshot.', () => {
    const wrapper = render(
      <Resume
        occupations={[
          {
            id: 'one',
            jobTitle: 'foo',
            startDate: 'Jan 2020',
            endDate: 'Dec 2020',
            organization: 'bar',
            responsibilities: [
              { id: 'one', description: 'Foo' },
              { id: 'two', description: 'Bar' }
            ]
          }
        ]}
        tools={[]}
        languages={[]}
        practices={[]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

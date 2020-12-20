import * as React from 'react';
import { render } from 'enzyme';
import { Occupation, OccupationProps } from './occupation';

describe('The Occupation component.', () => {
  it('Matches the snapshot.', () => {
    const responsibilities: OccupationProps['responsibilities'] = [
      { id: 'one', description: 'Foo' },
      { id: 'two', description: 'Bar' },
    ]

    const wrapper = render(
      <dl>
        <Occupation
          jobTitle="Sr. UI Developer"
          organization="Some Organization"
          startDate="Jan 1, 2021"
          endDate="Dec 31, 2021"
          responsibilities={responsibilities}
        />
      </dl>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Renders a responsibility for each on provided', () => {
    const responsibilities: OccupationProps['responsibilities'] = [
      {
        id: 'one',
        description: <p data-testid="occupation__responsibility">Foo</p>
      },
      {
        id: 'two',
        description: <p data-testid="occupation__responsibility">Bar</p>
      },
    ]

    const wrapper = render(
      <dl>
        <Occupation
          jobTitle="Sr. UI Developer"
          organization="Some Organization"
          startDate="Jan 1, 2021"
          endDate="Dec 31, 2021"
          responsibilities={responsibilities}
        />
      </dl>
    );

    const testHook = '[data-testid="occupation__responsibility"]';

    expect(wrapper.find(testHook).length).toBe(2);
  });
});

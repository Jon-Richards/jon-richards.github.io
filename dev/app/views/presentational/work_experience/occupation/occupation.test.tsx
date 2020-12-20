import * as React from 'react';
import { render } from 'enzyme';
import { Occupation, OccupationProps } from './occupation';

describe('The Occupation component.', () => {
  it('Matches the snapshot.', () => {
    const responsabilities: OccupationProps['responsabilities'] = [
      { id: 'one', text: 'Foo' },
      { id: 'two', text: 'Bar' },
    ]

    const wrapper = render(
      <dl>
        <Occupation
          jobTitle="Sr. UI Developer"
          organization="Some Organization"
          startDate="Jan 1, 2021"
          endDate="Dec 31, 2021"
          responsabilities={responsabilities}
        />
      </dl>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Renders a responsibility for each on provided', () => {
    const responsabilities: OccupationProps['responsabilities'] = [
      { id: 'one', text: 'Foo' },
      { id: 'two', text: 'Bar' },
    ]

    const wrapper = render(
      <dl>
        <Occupation
          jobTitle="Sr. UI Developer"
          organization="Some Organization"
          startDate="Jan 1, 2021"
          endDate="Dec 31, 2021"
          responsabilities={responsabilities}
        />
      </dl>
    );

    const testHook = '[data-testid="occupation__responsibility"]';

    expect(wrapper.find(testHook).length).toBe(2);
  });
});

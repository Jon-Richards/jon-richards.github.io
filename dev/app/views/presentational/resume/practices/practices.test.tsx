import * as React from 'react';
import { Practices } from './practices';
import { render } from 'enzyme';

describe('The Practices component.', () => {
  it('Should match the snapshot.', () => {
    const wrapper = render(
      <Practices practices={[
        { id: 'one', name: 'OOP' },
        { id: 'two', name: 'Agile' },
      ]} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render an item for each provided practice.', () => {
    const wrapper = render(
      <Practices practices={[
        { id: 'one', name: 'OOP' },
        { id: 'two', name: 'Agile' },
      ]} />
    );

    const testHook = '[data-testid="unordered-list__item"]';

    expect(wrapper.find(testHook).length).toBe(2);
  });
});

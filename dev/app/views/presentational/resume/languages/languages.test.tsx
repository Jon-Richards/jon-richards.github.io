import * as React from 'react';
import { Languages } from './languages';
import { render } from 'enzyme';

describe('The Languages component.', () => {
  it('Should match the snapshot.', () => {
    const wrapper = render(
      <Languages languages={[
        { id: 'one', name: 'JavaScript' },
        { id: 'two', name: 'TypeScript' },
      ]} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render an item for each provided language.', () => {
    const wrapper = render(
      <Languages languages={[
        { id: 'one', name: 'JavaScript' },
        { id: 'two', name: 'TypeScript' },
      ]} />
    );

    const testHook = '[data-testid="unordered-list__item"]';

    expect(wrapper.find(testHook).length).toBe(2);
  });
});

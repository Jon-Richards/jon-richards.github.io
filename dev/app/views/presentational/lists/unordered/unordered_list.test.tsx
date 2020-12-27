import * as React from 'react';
import { UnorderedList } from './unordered_list';
import { render } from 'enzyme';

describe('The OrderedList component.', () => {
  it('Should match the snapshot.', () => {
    const wrapper = render(
      <UnorderedList
        title="An Ordered List."
        items={[
          { id: 'one', content: 'Item one' },
          { id: 'two', content: 'Item one' }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render one list item for each element in the items array.', () => {
    const wrapper = render(
      <UnorderedList
        title="An Ordered List."
        items={[
          { id: 'one', content: 'Item one' },
          { id: 'two', content: 'Item one' }
        ]}
      />
    );
    const testHook = '[data-testid="unordered-list__item"]';

    expect(wrapper.find(testHook).length).toBe(2);
  });
});

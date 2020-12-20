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
});

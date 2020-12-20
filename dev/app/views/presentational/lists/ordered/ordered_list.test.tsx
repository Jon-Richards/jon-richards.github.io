import * as React from 'react';
import { OrderedList } from './ordered_list';
import { render } from 'enzyme';

describe('The OrderedList component.', () => {
  it('Should match the snapshot.', () => {
    const wrapper = render(
      <OrderedList
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

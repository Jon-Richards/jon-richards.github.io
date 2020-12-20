import * as React from 'react';
import { DescriptionList } from './description_list';
import { render } from 'enzyme';

describe('The OrderedList component.', () => {
  it('Should match the snapshot.', () => {
    const wrapper = render(
      <DescriptionList
        title="An Ordered List."
        items={[
          { id: 'one', type: 'TERM', content: 'A Term' },
          { id: 'two', type: 'DESCRIPTION', content: 'Description one' },
          { id: 'two', type: 'DESCRIPTION', content: 'Description two' }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

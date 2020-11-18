import * as React from 'react';
import { render, shallow } from 'enzyme';
import { Thumbnail } from './thumbnail';

describe('The gallery component.', () => {
  it('Should match the snapshot.', () => {
    const stubHandler = function () {};
    const test_1 = render(
      <Thumbnail
        src="test.jpg"
        altText="A test image."
        href="www.google.com"
        onClick={() => stubHandler()}
      />
    );

    expect(test_1).toMatchSnapshot();
  });

  it('Should fire the supplied click handler when clicked.', () => {
    const mockHandler = jest.fn();
    const test_1 = shallow(
      <Thumbnail
        src="test.jpg"
        altText="A test image."
        href="www.google.com"
        onClick={() => mockHandler()}
      />
    );

    test_1.find('[data-testid="gallery__thumb"]').simulate('click');
    expect(mockHandler).toBeCalledTimes(1);
  });
});

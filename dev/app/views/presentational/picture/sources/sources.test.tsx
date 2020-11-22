import * as React from 'react';
import { Sources, SourcesProps } from './sources';
import { render } from 'enzyme';

describe('The Sources component.', () => {
  it('Should match the snapshot.', () => {
    const sources: SourcesProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
      { mediaQuery: 'min-width(480px)', source: 'test_medium.jpg' },
      { mediaQuery: 'min-width(720px)', source: 'test_large.jpg' },
    ];
    const test_1 = render(<Sources sources={sources} />);

    expect(test_1).toMatchSnapshot();
  });

  it('Renders a source tag for each provided source.', () => {
    const sources: SourcesProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
      { mediaQuery: 'min-width(480px)', source: 'test_medium.jpg' },
      { mediaQuery: 'min-width(720px)', source: 'test_large.jpg' },
    ];
    const test_1 = render(<Sources sources={sources} />);

    expect(test_1.length).toBe(3);
  })
});

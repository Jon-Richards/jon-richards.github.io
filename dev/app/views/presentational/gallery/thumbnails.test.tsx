import * as React from 'react';
import { render } from 'enzyme';
import { Thumbnails } from './thumbnails';

describe('The Thumbnails component.', () => {
  it('Should match the snapshot.', () => {
    const wrapper = render(
      <Thumbnails
        data={[
          {
            title: 'A thumbnail',
            sources: [
              { mediaQuery: '(min-width: 300)', source: './image_3.jpg' },
              { mediaQuery: '(min-width: 200)', source: './image_2.jpg' },
              { mediaQuery: '(min-width: 100)', source: './image_1.jpg' },
            ],
            fallbackSource: './bogus.jpg',
            description: 'A brief description.',
            href: 'https://www.google.com'
          }
        ]}
        clickHandler={() => ({})}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render one thumbnail per element in the data prop.', () => {
    const wrapper = render(
      <div>
        <Thumbnails
          data={[
            {
              title: 'A thumbnail',
              sources: [
                { mediaQuery: '(min-width: 300)', source: './image_3.jpg' },
                { mediaQuery: '(min-width: 200)', source: './image_2.jpg' },
                { mediaQuery: '(min-width: 100)', source: './image_1.jpg' },
              ],
              fallbackSource: './bogus.jpg',
              description: 'A brief description.',
              href: 'https://www.google.com'
            },
            {
              title: 'Another thumbnail',
              sources: [
                { mediaQuery: '(min-width: 300)', source: './image_3.jpg' },
                { mediaQuery: '(min-width: 200)', source: './image_2.jpg' },
                { mediaQuery: '(min-width: 100)', source: './image_1.jpg' },
              ],
              fallbackSource: './bogus.jpg',
              description: 'A brief description.',
              href: 'https://www.google.com'
            }
          ]}
          clickHandler={() => ({})}
        />
      </div>
    );

    const thumbs = wrapper.find('[data-testid="gallery__thumb"]');
    expect(thumbs.length).toBe(2);
  });
});

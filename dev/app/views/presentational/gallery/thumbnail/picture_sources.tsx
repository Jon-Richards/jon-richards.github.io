import * as React from 'react';

/**
 * Renders an array of <source> tags.  There are ways to produce this behavior
 * with a single srcset attribute, but this method offers better readability at
 * runtime.
 */
export function PictureSources(props: PictureSourcesProps): JSX.Element {
  const mapped = props.sources.map(source => (
    <source
      key={source.source}
      media={source.mediaQuery}
      srcSet={source.source}
      data-testid="gallery__thumb__picture-source"
    />
  ));

  const reversed = reverseForMobileFirst(mapped);

  return <React.Fragment>{reversed}</React.Fragment>;
}

export type PictureSourcesProps = {
  sources: PictureSource[];
}

type PictureSource = {
  mediaQuery: string;
  source: string;
}

/**
 * The browser will use whichever <source> tag matches the environment first,
 * so we can't assume that "min-width" will cascade the way it does with CSS.
 * (If the first source represents the smallest width, it will always return
 * true.) This function simply reverses the array so that larger resolutions
 * will be checked first.
 */
function reverseForMobileFirst(sources: JSX.Element[]): JSX.Element[] {
  return sources.reverse();
}

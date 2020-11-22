import * as React from 'react';

/**
 * Renders an array of <source> tags.  There are ways to produce this behavior
 * with a single srcset attribute, but this method offers better readability at
 * runtime.
 */
export function Sources(props: SourcesProps): JSX.Element {
  const mapped = props.sources.map(source => (
    <source
      key={source.source}
      media={source.mediaQuery}
      srcSet={source.source}
      data-testid="picture__source"
    />
  ));

  return <React.Fragment>{mapped}</React.Fragment>;
}

export type SourcesProps = {
  sources: Source[];
}

type Source = {
  mediaQuery: string;
  source: string;
}

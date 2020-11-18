import * as React from 'react';
import { Thumbnail, ThumbnailProps } from './thumbnail';
import { v4 as uuid } from 'uuid';

export function Thumbnails(props: ThumbnailsProps): JSX.Element {
  const mapped = props.data.map(thumbnail => {
    const { sources, fallbackSource, altText, href } = thumbnail;

    return (
      <Thumbnail
        key={uuid()}
        sources={sources}
        fallbackSource={fallbackSource}
        altText={altText}
        href={href}
        onClick={e => props.clickHandler(e, href)}
      />
    );
  });

  return <React.Fragment>{mapped}</React.Fragment>;
}

export type ThumbnailsProps = {
  data: ThumbnailShape[],
  clickHandler: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    href: string
  ) => {}
}

type ThumbnailShape = Omit<ThumbnailProps[][0], 'onClick'>;

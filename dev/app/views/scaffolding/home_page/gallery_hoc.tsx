import * as React from 'react';
import { Gallery, GalleryProps } from 'Views/presentational/gallery';
import { connect } from 'react-redux';
import { Store } from 'Store/index';
import { setRoute } from 'Action_creators/set_route';
import { Breakpoints } from 'Config/styles/breakpoints';

type Projects = Store['portfolio']['projects'];
type StateProps = Pick<GalleryProps, 'thumbnails'>;
type DispatchProps = Pick<GalleryProps, 'thumbnailClickHandler'>;

function mapProjectsToThumbnails(projects: Projects): StateProps['thumbnails'] {
  return projects.map(project => {
    const {
      display_title,
      description,
      url_title: href,
      images
    } = project;

    return {
      /**
       * Sources appear in order as <source> tags within a <picture> tag.  Since
       * the browser uses the first <source> who's "media" attribute evaluates
       * to true, larger breakpoints must appear first.  Otherwise, the smallest
       * media query would always be used to determine Thumbnail's source.
       */
      sources: [
        {
          source: convertNullToEmptyString(thumb_device_large),
          mediaQuery: `(min-width: ${Breakpoints[1440]})`
        },
        {
          source: convertNullToEmptyString(thumb_device_medium),
          mediaQuery: `(min-width: ${Breakpoints[720]})`
        },
        {
          source: convertNullToEmptyString(thumb_device_small),
          mediaQuery: `(min-width: ${Breakpoints[480]})`
        }
      ],
      fallbackSource: convertNullToEmptyString(thumb_device_small),
      title: display_title,
      description,
      href,
    };
  });
}

function convertNullToEmptyString(value: null | string): string {
  if (value === null) {
    console.error(new TypeError('Invalid thumbnail source.'));
    return '';
  }
  return value;
}

function mapStateToProps(state: Store): StateProps {
  return {
    thumbnails: mapProjectsToThumbnails(state.portfolio.projects)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {
    thumbnailClickHandler: (
      e: React.MouseEvent<HTMLElement,
      MouseEvent>, path?: string
    ) => {
      e.preventDefault();
      return setRoute(`/portfolio/${path}`);
    },
  };
}

const galleryMemo = React.memo<GalleryProps>(Gallery);

const GALLERY_HOC = connect(mapStateToProps, mapDispatchToProps())(galleryMemo);

export { GALLERY_HOC as GalleryHOC };

import * as React from 'react';
import { Gallery, GalleryProps } from 'Views/presentational/gallery';
import { connect } from 'react-redux';
import { Store } from 'Store/index';
import { setRoute } from 'Action_creators/set_route';
import { Breakpoints } from 'Config/styles/breakpoints';
import { buildThumbnailSource } from './thumbnail_presenter';
import { findProjectThumbnails } from './gallery_presenter';

type Projects = Store['portfolio']['projects'];
type Images = Store['portfolio']['images'];
type StateProps = Pick<GalleryProps, 'thumbnails'>;
type DispatchProps = Pick<GalleryProps, 'thumbnailClickHandler'>;

function mapProjectsToThumbnails(
  projects: Projects,
  images: Images
): StateProps['thumbnails'] {
  return projects.map(project => {
    const thumbnails = findProjectThumbnails(project, images);
    const {
      display_title,
      description,
      url_title: href
    } = project;

    return {
      /**
       * Sources appear in order as <source> tags within a <picture> tag.  Since
       * the browser uses the first <source> who's "media" attribute evaluates
       * to true, larger breakpoints must appear first.  Otherwise, the smallest
       * media query would always be used to determine Thumbnail's source.
       */
      sources: [
        buildThumbnailSource(
          `(min-width: ${Breakpoints[1440]})`,
          320,
          thumbnails
        ),
        buildThumbnailSource(
          `(min-width: ${Breakpoints[720]})`,
          480,
          thumbnails
        ),
      ],
      fallbackSource: buildThumbnailSource('', 480, thumbnails).source,
      title: display_title,
      description,
      href,
    };
  });
}

function mapStateToProps(state: Store): StateProps {
  const { projects, images } = state.portfolio;
  return {
    thumbnails: mapProjectsToThumbnails(projects, images)
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

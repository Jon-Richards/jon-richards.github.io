import { Gallery, GalleryProps } from 'Views/presentational/gallery';
import { connect } from 'react-redux';
import { Store } from 'Store/index';

type Projects = Store['portfolio']['projects'];
type MatchingMediaQueries = Store['browser']['matching_media_queries'];

type StateProps = Pick<
  GalleryProps,
  | 'thumbnailSize'
  | 'thumbnails'
>;

type ThumbnailSize = GalleryProps['thumbnailSize'];

function convertNullToEmptyString(value: null | string): string {
  if (value === null) {
    console.error(new TypeError('Invalid thumbnail source.'));
    return '';
  }
  return value;
}

function mapProjectsToThumbnails(projects: Projects): StateProps['thumbnails'] {
  return projects.map(project => {
    const {
      uuid,
      display_title: description,
      thumb_device_small,
      thumb_device_medium,
      thumb_device_large
    } = project;

    const sourceSmall = convertNullToEmptyString(thumb_device_small);
    const sourceMedium = convertNullToEmptyString(thumb_device_medium);
    const sourceLarge = convertNullToEmptyString(thumb_device_large);

    return (
      {
        uuid,
        description,
        sourceSmall,
        sourceMedium,
        sourceLarge,
        onClick: () => {}
      }
    );
  });
}

function computeThumbnailSize (queries: MatchingMediaQueries): ThumbnailSize {
  const mapped = queries.map(query => query.id);
  if (mapped.includes('1080')) {
    return 'LARGE';
  } else if (mapped.includes('480')) {
    return 'MEDIUM';
  } else {
    return 'SMALL';
  }
}

function mapStateToProps(state: Store): StateProps {
  return {
    thumbnails: mapProjectsToThumbnails(state.portfolio.projects),
    thumbnailSize: computeThumbnailSize(state.browser.matching_media_queries)
  };
}

const GALLERY_HOC = connect(mapStateToProps, () => ({}))(Gallery);

export { GALLERY_HOC as GalleryHOC };
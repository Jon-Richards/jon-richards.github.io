/**
 * @fileoverview
 * Contains a higher order component for the Home Page that connects it to the
 * Redux store.
 */

import { HomePage } from './home_page';
import { getOverview } from '../../../../../controllers/index';
import { connect } from 'react-redux';

function mapDispatchToProps(): Pick<HomePage['props'], 'getOverview'> {
  return {
    getOverview: () => getOverview()
  };
}

/** Connected component that renders the Home Page. */
export const HOME_PAGE_HOC = connect(
  null, 
  mapDispatchToProps()
)(HomePage);
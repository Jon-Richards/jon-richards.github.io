/**
 * @fileoverview
 * Contains a higher order component for the Home Page that connects it to the
 * Redux store.
 */

import { HomePage } from './home_page';
import { getOverview } from '../../../../../action_creators';
import { connect } from 'react-redux';
import { RootStore } from '../../../../../store/root';

type StoreProjects = RootStore['portfolio']['projects'];
type ComponentProjects = HomePage['props']['projects'];

function convertProjects(projects: StoreProjects): ComponentProjects {
  return projects.map(project => {
    return {
      title: project.display_title
    };
  });
}

function mapStateToProps(state: RootStore): Pick<
  HomePage['props'],
  | 'projects'
> {
  return {
    projects: convertProjects(state.portfolio.projects)
  };
}

function mapDispatchToProps(): Pick<HomePage['props'], 'getOverview'> {
  return {
    getOverview: () => getOverview()
  };
}

/** Connected component that renders the Home Page. */
export const HOME_PAGE_HOC = connect(
  mapStateToProps, 
  mapDispatchToProps()
)(HomePage);
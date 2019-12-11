import { PageRoot } from './page_root';
import { getOverview } from '../../../../controllers/action_creators';
import { connect } from 'react-redux';
import { RootStore } from '../../../../models';
import { HomePage } from './home_page';
import { adaptProjects } from './adaptors';

function mapStateToProps(state: RootStore): Pick<
  HomePage['props'],
  | 'projects'
> {
  return {
    projects: adaptProjects(state.portfolio.projects)
  };
}

function mapDispatchToProps(): Pick<PageRoot['props'], 'initialize'> {
  return {
    initialize: () => getOverview()
  };
}

/** Connected component that renders the Home Page. */
export const PAGE_ROOT_HOC = connect(
  mapStateToProps, 
  mapDispatchToProps()
)(PageRoot);
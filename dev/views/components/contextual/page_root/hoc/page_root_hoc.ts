import { PageRoot } from '../page_root';
import { getOverview } from '../../../../../action_creators';
import { connect } from 'react-redux';
import { RootStore } from '../../../../../store/root';
import { HomePage } from '../subcomponents/pages/home';
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
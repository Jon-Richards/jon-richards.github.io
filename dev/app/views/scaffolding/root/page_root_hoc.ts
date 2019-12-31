import { PageRoot } from './page_root';
import { bootstrap } from 'Action_creators/bootstrap';
import { connect } from 'react-redux';
import { RootStore } from 'Store/root_reducer';
import { HomePage } from './home_page';
import { projectsMapper } from './mappers';

function mapStateToProps(state: RootStore): Pick<
  HomePage['props'],
  | 'projects'
> {
  return {
    projects: projectsMapper(state.portfolio.projects)
  };
}

function mapDispatchToProps(): Pick<PageRoot['props'], 'initialize'> {
  return {
    initialize: () => bootstrap()
  };
}

/** Connected component that renders the Home Page. */
export const PAGE_ROOT_HOC = connect(
  mapStateToProps, 
  mapDispatchToProps()
)(PageRoot);
import { PageRoot } from './page_root';
import { bootstrap } from '../../../../action_creators';
import { connect } from 'react-redux';
import { RootStore } from '../../../../store';
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
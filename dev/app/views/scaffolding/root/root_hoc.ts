import { Root } from './root';
import { bootstrap } from 'Action_creators/bootstrap';
import { connect } from 'react-redux';
type DispatchableProps = Pick<Root['props'], 'initialize'>;

function mapDispatchToProps(): DispatchableProps {
  return {
    initialize: () => bootstrap()
  };
}

/** Connected component that renders the Home Page. */
const ROOT_HOC = connect(undefined, mapDispatchToProps())(Root);

export { ROOT_HOC as RootHOC };
import { RootStore } from '../../../store/root';
import { HomePage } from './pages/home';

type ModelProjects = RootStore['portfolio']['projects'];
type ViewProjects = HomePage['props']['projects'];

/** 
 * Converts the structure of a project in the redux store to one used by the
 * view layer.
 * @param projects An array of projects held by the redux store.
 * @return An array of projects formatted for the view.
 */
export function adaptProjects(projects: ModelProjects): ViewProjects {
  return projects.map(project => {
    return {
      title: project.display_title
    };
  });
}
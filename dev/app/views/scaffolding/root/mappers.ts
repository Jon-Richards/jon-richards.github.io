import { RootStore } from 'dev/app/store/root_reducer';
import { HomePage } from './home_page';

type ModelProjects = RootStore['portfolio']['projects'];
type ViewProjects = HomePage['props']['projects'];

/** 
 * Converts the collection of portfolio Projects in the Store to match that used
 * by the PageRoot component.
 * @param projects An array of projects held by the redux store.
 * @return An array of projects formatted for the view.
 */
export function projectsMapper(projects: ModelProjects): ViewProjects {
  return projects.map(project => {
    return {
      title: project.display_title
    };
  });
}
import './core.scss';
import { registerCustomElements } from './custom_elements';
import { getInfo } from './io/info';
import { getProjects } from './io/projects';
import { getLanguages } from './io/languages';

registerCustomElements({});

getInfo();
getProjects()
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data)) {
      if (data.length) {
        return getLanguages(data[0].languages_url);
      }
    }
    return Promise.reject('No data');
  })
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));


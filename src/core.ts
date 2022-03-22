import './core.scss';
import { registerCustomElements } from './custom_elements';
import { getInfo } from './io/info';
import { getRepos } from './io/repos';
import { getLanguages } from './io/languages';
// import { getContent } from './io/content';

// getContent();

registerCustomElements({});

getInfo()
.then(data => console.log('info', data))
.catch(err => console.error(err));

getRepos('jon-richards')
.then(repos => {
  repos.forEach(repo => {
    getLanguages(repo.languages_url);
  });
})
.catch(err => console.error(err));

// buildLanguages

/*
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
*/


import { getInfo } from './info';
import { getRepos } from './repos';
import { getLanguages } from './languages';

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


/**
 * Returns the list of languages for a given repo.
 */
export async function getLanguages(languages_url: string) {
  return fetch(languages_url, {
    method: 'GET'
  });
}

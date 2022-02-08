/**
 * Fetches the projects and returns a resolved Promise with the request
 * response.
 */
export async function getProjects() {
  const response = await fetch(
    'https://api.github.com/users/jon-richards/repos',
    {
      method: 'GET'
    }
  );
  return Promise.resolve(response);
}


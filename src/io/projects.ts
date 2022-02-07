export async function getProjects() {
  const response = await fetch(
    'https://api.github.com/users/jon-richards/repos',
    {
      method: 'GET'
    }
  );
  console.log(response);
}


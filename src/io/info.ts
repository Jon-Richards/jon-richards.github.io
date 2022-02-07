export async function getInfo() {
  const response = await fetch('https://api.github.com/users/jon-richards', {
    method: 'GET'
  });
  console.log(response);
}


/* eslint max-lines-per-function: "off" */
export async function getContent() {
  await fetch(
      'https://api.github.com/repos/jon-richards/jon-richards.github.io/' +
      'contents/package.json',
    {
      method: 'GET'
    }
  )
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    console.log(window.atob(data.content));
  });
}

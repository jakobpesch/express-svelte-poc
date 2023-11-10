/** @type {import('./$types').PageLoad} */
export async function load(event) {
  console.log(event.url);
  const response = await event.fetch("http://localhost:3000/api");

  const json = await response.json();
  console.log(json);
  return { response: json };
}

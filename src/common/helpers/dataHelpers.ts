export async function getData(url: string) {
  let res = await fetch(url);
  return res.json();
}

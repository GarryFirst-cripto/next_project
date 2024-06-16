export default async function getHistory() {
  const data = await fetch("/api/history");
  return data.json();
}
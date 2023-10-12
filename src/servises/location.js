export async function GET_IP() {
  const url = 'http://ip-api.com/json/?fields=61439';
  const response = await fetch(url);
  const data = await response.json();
  const { country, lat, lon } = data;

  return country || `${lat}, ${lon}`;
}

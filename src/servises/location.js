export async function GET_IP() {
  let endpoint =
    'http://ip-api.com/json/?fields=status,message,country,lat,lon';

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (data.status !== 'success') {
      console.log('Failed consultation: ' + data.message);
      return null;
    }

    if (data.country) {
      return data.country;
    } else {
      return `${data.lat}, ${data.lon}`;
    }
  } catch (error) {
    console.error('Consultation error:', error);
    return null;
  }
}

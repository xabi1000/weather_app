// @ts-nocheck
function getDateTimeDay() {
  const dateCurrentTime = new Date();

  const optionsDateTime = {
    weekday: 'long', // Nombre del día en letras
    year: 'numeric',
    month: 'numeric', // Nombre del mes en numeros
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const formatter = new Intl.DateTimeFormat(
    'en-EN',
    optionsDateTime
  );

  const dateTimeFormatted =
    formatter.format(dateCurrentTime);

  return dateTimeFormatted;
}

export { getDateTimeDay };

export const kelvinToCelsius = (kelvin) => {
  const celsius = kelvin - 273.15;
  return `${Math.round(celsius)}°`;
}

export const capitalize = (str) => {
  const splitted = str.split(" ");
  let capitalized = '';
  for (let i = 0; i < splitted.length; i++) {
    const word = splitted[i]
    capitalized = capitalized + word[0].toUpperCase() + word.slice(1, word.length) + " "
  }
  return capitalized.trim()
}
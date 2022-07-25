export const age = (planet: unknown, seconds: unknown): unknown => {
  let result: unknown = "type error";
  if (typeof seconds === "number" && typeof planet === "string") {
    let years = convertSecondsToYears(seconds) as number;
    result = convertYearsToPlanet(years, planet.toLocaleLowerCase());
  }
  return result;
}
const convertSecondsToYears = (seconds: number): number => {
  return seconds / 31557600;
};

const convertYearsToPlanet = (years: number, planet: string): unknown => {
  let multiplier: number;
  switch (planet) {
    case "earth": {
      multiplier = 1;
      break;
    }
    case "venus": {
      multiplier = 0.61519726;
      break;
    }

    case "mercury": {
      multiplier = 0.2408467;
      break;
    }
    case "mars": {
      multiplier = 1.8808158;
      break;
    }
    case "jupiter": {
      multiplier = 11.862615;
      break;
    }

    case "saturn": {
      multiplier = 29.447498;
      break;
    }

    case "uranus": {
      multiplier = 84.016846;
      break;
    }

    case "neptune": {
      multiplier = 164.79132;
      break;
    }
    default: {
      return "`Error";
      break;
    }
  }
  return Math.round((years / multiplier) * 100) / 100;
}

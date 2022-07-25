const plantToMultiplier = {
  earth: 1,
  venus: 0.61519726,
  mercury:  0.2408467,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}
const convertYearsToPlanet = (years: number, planet: string): unknown => {
  const planetIndex = planet as keyof typeof plantToMultiplier
  return Math.round((years / plantToMultiplier[planetIndex]) * 100) / 100
}
const convertSecondsToYears = (seconds: number): number => {
return seconds / 31557600
}
export const age = (planet: keyof typeof plantToMultiplier, seconds: number): unknown => {
  let result: unknown = 'type error'

    let years = convertSecondsToYears(seconds) as number
    result = convertYearsToPlanet(years, planet.toLocaleLowerCase())
  return result
}



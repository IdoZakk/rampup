export function twoFer(input?: string|null): string {
  let name : string =  input === undefined ?  "you" : input!;
  return  `One for ${name}, one for me.`;
  
}

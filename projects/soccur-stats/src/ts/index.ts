import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
const matchreader = new MatchReader(reader);
matchreader.load();

const firstTest = reader.data[0][0];

let manUnitWins = 0;
for (let match of matchreader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitWins++;
  }
}

console.log(`alright something is cool here with ${manUnitWins}`);

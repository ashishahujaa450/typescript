import { Sorter } from './Sort';
import { numberCollection } from './numberColleciton';
import { characterCollection } from './characterCollection';

const numCol = new numberCollection([15, -1, 3, 0, 22]);
const sorter = new Sorter(numCol);

const charCol = new characterCollection('zyajmZ');

sorter.sort();

const sortt = new Sorter(charCol);
sortt.sort();

console.log(charCol.data);

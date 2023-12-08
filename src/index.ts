import { Sorter } from "./Sorter"
import { NumbersCollection} from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedClass } from "./LinkedList"


// const stringCollection = new CharactersCollection('Hello')
// const stringSorter = new Sorter(stringCollection)
// stringSorter.sort();
// console.log(stringSorter)

// const numbersCollection = new NumbersCollection([109,3,-5,0,-20])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

const newList = new LinkedClass();
newList.add(500);
newList.add(-10);
newList.add(-3);
newList.add(4);

const sorter = new Sorter(newList)
sorter.sort();
newList.print();
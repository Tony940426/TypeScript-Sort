import { Sorter } from "./Sorter"
import { NumbersCollection} from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"


const stringCollection = new CharactersCollection('Hello')
const stringSorter = new Sorter(stringCollection)
stringSorter.sort();
console.log(stringSorter)

const numbersCollection = new NumbersCollection([109,3,-5,0,-20])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)

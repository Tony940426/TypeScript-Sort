import { Sorter } from "./Sorter"
import { NumbersCollection} from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedClass } from "./LinkedList"


const stringCollection = new CharactersCollection('Hello')
stringCollection.sort();
console.log(stringCollection)

const numbersCollection = new NumbersCollection([109,3,-5,0,-20])
numbersCollection.sort()
console.log(numbersCollection.data)


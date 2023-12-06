import { Sorter } from "./Sorter"
import { NumbersCollection} from "./NumbersCollection"


const numbersCollection = new NumbersCollection([109,3,-5,0,-20])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)

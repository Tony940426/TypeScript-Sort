"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
// const stringCollection = new CharactersCollection('Hello')
// const stringSorter = new Sorter(stringCollection)
// stringSorter.sort();
// console.log(stringSorter)
// const numbersCollection = new NumbersCollection([109,3,-5,0,-20])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)
const newList = new LinkedList_1.LinkedClass();
newList.add(500);
newList.add(-10);
newList.add(-3);
newList.add(4);
const sorter = new Sorter_1.Sorter(newList);
sorter.sort();
newList.print();

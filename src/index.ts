class Sorter {

    constructor(public collection: number[] | string){
    }

    sort(): void{
        const { length } = this.collection;

        for(let i = 0; i < length; i++){
            for (let j = 0; j < length - i - 1; j++){

                //If collection works with a array of numbers
                //It will only work if the collection are all numbers
                if(this.collection instanceof Array){
                    //Type guard. If makes typescript aware that we are working with a array
                    //We use instanceof if it is constructor (not primative type)
                    if(this.collection[j] > this.collection[j+1]) {
                        const lefthand = this.collection[j];
                        this.collection[j] = this.collection [j+1];
                        this.collection[j+1] = lefthand
                    }
                }

                if(typeof this.collection === 'string'){
                    this.collection.
                }
                //If collection is a group of string
                //type of this.collection  === 'string', this format is used if the data is primative
                //eg this.collection === 'number'
            }
        }
    }
}

const sorter = new Sorter([10, -2, 4, -3])
sorter.sort()
console.log(sorter.collection)

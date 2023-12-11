interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}
//interface doesn't guarantee that the methods are returning the right values. It only checks if it 
//is only there.

export abstract class Sorter {
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;

    sort(): void{
        const { length } = this;
        for(let i = 0; i < length; i++){
            for (let j = 0; j < length - i - 1; j++){
                if(this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }
            }
        }
    }
}
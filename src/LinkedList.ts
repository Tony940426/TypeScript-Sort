class Node {
    next: Node | null= null;
    //referencing the next node. Default value of null.
    
    constructor(public data: number){}
}

export class LinkedClass {
    head: Node | null = null;

    add(data: number): void{
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return
        }

        let tail = this.head;
        while(tail.next){
            tail = tail.next;
        }

        tail.next = node;
    }

    get length(): number {
        if(!this.head){
            return 0;
        }

        let length = 1;
        let node = this.head;
        while(node.next) {
            length ++;
            node = node.next;
        }
        return length
    }

    at(index: number): Node{
        if(!this.head){
            throw new Error('Index Out of Bounds')
        }
    }
}
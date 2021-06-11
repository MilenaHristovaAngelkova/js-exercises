class List {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }

    add(element) {
        this.arr.push(element);
        return this.arr.sort();
    }

    remove(index) {
        if (index >= 0 && index <= this.arr.length) {
            this.arr.splice(index, 1);
            return this.arr.sort();
        } else {
            return 'Invalid index.'
        }
    }

    get(index) {
        if (index >= 0 && index <= this.arr.length) {
            return this.arr[index];
        } else {
            return 'Invalid index.'
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
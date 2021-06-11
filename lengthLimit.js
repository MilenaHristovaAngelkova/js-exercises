class Stringer {
    constructor(innerString, innerLength) {
        this._innerString = innerString;
        this._innerLength = innerLength;
        this.currentLength = innerLength;
    }

    increase(length) {
        this.currentLength = this._innerLength + length;
        return this.currentLength;
    }

    decrease(length) {
        this.currentLength = this._innerLength - length;
        return this.currentLength > 0 ? this.currentLength : 0;
    }

    toString() {
        if (this._innerString.length <= this.currentLength) {
            return this._innerString;
        } else if (this._innerString.length == 0){
            return '...';
        } else {
            let temp = this._innerString.split('');
            let temp2 = [];
            for (let i = 0; i < this.currentLength; i++){
                temp2.push(temp[i]);
            }
            return temp2.join('') + '...';
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString());
test.increase(4); 
console.log(test.toString());
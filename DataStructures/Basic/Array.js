
class MyArray {
    #items
    constructor() {
        this.length = 0;
        this.#items = {};
    }

    // Add to back of array
    push(val) {
        this.#items[this.length] = val;
        this.length++; 
        return null;
    }   

    // Remove from the back of array
    pop() {
        if (this.length === 0) {
            return null;
        }
        const key = JSON.stringify(this.length - 1)
        const removed = this.#items[key];
        delete this.#items[key];
        this.length--;
        return removed;
    }
    
    // Add to the front of the array
    unshift(val) {

        // Re-indexes
        for (let index = this.length - 1; index >= 0; index--) {
            const newPositionKey = index + 1
            const key = JSON.stringify(index)
            this.#items[newPositionKey] = this.#items[key]
        }
        this.#items['0'] = val; this.length++;
        return null;
    }

    // Take off the front of the array
    shift() {
        if (this.length === 0) {
            return null;
        }
        const front = this.#items['0'];
        for (let index = 0; index < this.length; index++) {
            this.#items[JSON.stringify(index)] = this.#items[JSON.stringify(index + 1)];
        }
        delete this.#items[JSON.stringify(this.length - 1)]
        this.length--;
        return front;
    }

    forEach(func) {
        const shallowCopy = Object.assign({}, this.#items);
        for (let index = 0; index < this.length; index++) {
            func(shallowCopy[JSON.stringify(index)], index);
        }
        return null;
    };

    map(func) {
        const shallowCopy = Object.assign({}, this.#items);
        for (let index = 0; index < this.length; index++) {
            const key = JSON.stringify(index)
            shallowCopy[key] = func(shallowCopy[key], index);
        }
        return shallowCopy;
    }

    // Takes optional accumulater and current value
    reduce(func) {

    }

    concat(array) {

    }

    every(func) {
        for (let index = 0; index < this.length; index++) {
            const bool = func(this.#items[JSON.stringify(index)], index);
            if (!bool) {
                return false;
            }
        }
        return true;
    }

    filter(func) {
        const newArray = new MyArray();
        for (let index = 0; index < this.length; index++) {
            const value = this.#items[JSON.stringify(index)]
            const bool = func(value, index);
            if (!!bool === true) {
                newArray.push(value)
            }
        }
        return newArray
    }

    fill(val) {
        for (let index = 0; index < this.length; index++) {
            this.#items[JSON.stringify(index)] = val;
        }
    }

    print() {
        console.table({ 'Current Length': this.length })
        console.log(this.#items);
    }
    
    
}

const arr = new MyArray();
arr.push(2)
arr.push(4)
arr.push(6)
arr.forEach((ele, i) => console.log(ele))
arr.map((ele, i) => {
    return ele * i
})
arr.fill(1)
console.log(arr.every((ele, i) => {
    return ele % 2 === 1
}))
console.log(arr.filter((ele, i) => {
    return ele === 1;
}))
arr.print()




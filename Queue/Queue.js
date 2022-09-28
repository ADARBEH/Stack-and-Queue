'use strict';
const node = require('./Node.js');

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        if (this.front === null) {
            this.front = new node(value, 0);
            this.rear = this.front;
        } else {
            this.rear = new node(value, this.rear.level + 1);
            this.front.next = this.rear;
        }
    }

    dequeue() {
        if (this.front === null) {
            return null;
        } else {
            this.front = this.front.next;
            return this.front;
        }
    }

    peek() {
        if (this.front === null) {
            return null;
        } else {
            return this.front;
        }
    }
    
}

module.exports = Queue;
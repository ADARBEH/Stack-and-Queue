'use strict';

const node = require('./Node.js');

class Stack {
    constructor() {
        this.stack = [];
        this.top = null;
    }

    push(value) {
        if (this.top === null) {
            this.top = new node(value, 0);
            this.stack.push(this.top);
        } else {
            this.top = new node(value, this.top.level + 1);
            this.stack.push(this.top);
        }
    }

    pop() {
        if (this.top === null) {
            return null;
        } else {
            this.stack.pop();
            this.top = this.stack[this.stack.length - 1];
            return this.top;
        }
    }

    peek() {
        if (this.top === null) {
            return null;
        } else {
            return this.top;
        }
    }

    isEmpty() {
        if (this.top === null) {
            return true;
        } else {
            return false;
        }
    }

}

module.exports = Stack;
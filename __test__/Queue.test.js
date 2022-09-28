'use strict';
const Queue = require('../Queue/Queue.js');

describe('Testing the queue class', () => {
    it('test creating a new ins.', () => {
        const newQueue = new Queue();
        expect(newQueue instanceof Queue).toBeTruthy();
        expect(newQueue.peek()).toBeNull();
    });
});

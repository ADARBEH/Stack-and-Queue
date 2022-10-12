'use strict';
const Queue = require('../Queue/Queue.js');

describe('Testing the queue class', () => {
    it('test creating a new ins.', () => {
        const queue = new Queue();
        expect(queue instanceof Queue).toBeTruthy();
        expect(queue.peek()).toBeNull();
    });

    it('test enqueue method', () => {
        const queue = new Queue();
        queue.enqueue('ibraheem');
        expect(queue.peek().data).toEqual('ibraheem');
    });

    it('test dequeue method', () => {
        const queue = new Queue();
        queue.enqueue("ibraheem");
        queue.enqueue("mohammed");
        queue.enqueue("ahmed");
        expect(queue.dequeue()).toEqual({data: 'ahmed', next: NaN});
    })
    

});


'use strict';

const Stack = require('../Stack/Stack.js');


describe('Testing the stack class', () => {
    it('test creating a new ins.', () => {
        const newStack = new Stack();
        expect(newStack instanceof Stack).toBeTruthy();
        expect(newStack.peek()).toBeNull();
    });


});


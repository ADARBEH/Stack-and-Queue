'use strict';

const Stack = require('../Stack/Stack.js');


describe('Testing the stack class', () => {
    it('test creating a new ins.', () => {
        const stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
        expect(stack.peek()).toBeNull();
    });

    it('test push and peek', () => {
        const stack = new Stack();
        stack.push("ibraheem");
        stack.push("mohammed");
        stack.push("ahmed");
        stack.push("ali");
        expect(stack.peek()).toEqual({ item: 'ali', level: 3 });
    })

    it('test push and pop', () => {
        const stack = new Stack();
        stack.push("ibraheem");
        stack.push("mohammed");
        stack.push("ahmed");
        stack.push("ali");
        expect(stack.pop()).toEqual({item: 'ahmed', level: 2});
    })

    it('test empty', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    })

    it('test push and empty ', () => {
        const stack = new Stack();
        stack.push("ibraheem");
        stack.push("mohammed");
        stack.push("ahmed");
        stack.push("ali");
        expect(stack.isEmpty()).toBe(false);
    })
    
});


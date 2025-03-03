"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const eventEmitter_1 = require("./eventEmitter");
(0, vitest_1.describe)('EventEmitter', () => {
    let emitter;
    (0, vitest_1.beforeEach)(() => {
        emitter = new eventEmitter_1.EventEmitter();
    });
    (0, vitest_1.test)('should subscribe to an event and call the callback when emitted', () => {
        const callback = vitest_1.vi.fn();
        const eventName = 'testEvent';
        const args = [1, 2, 3];
        emitter.subscribe(eventName, callback);
        emitter.emit(eventName, args);
        (0, vitest_1.expect)(callback).toHaveBeenCalledWith(...args);
    });
    (0, vitest_1.test)('should unsubscribe from an event', () => {
        const callback = vitest_1.vi.fn();
        const eventName = 'testEvent';
        const subscription = emitter.subscribe(eventName, callback);
        subscription.unsubscribe();
        emitter.emit(eventName);
        (0, vitest_1.expect)(callback).not.toHaveBeenCalled();
    });
    (0, vitest_1.test)('should handle multiple subscribers for the same event', () => {
        const callback1 = vitest_1.vi.fn();
        const callback2 = vitest_1.vi.fn();
        const eventName = 'testEvent';
        emitter.subscribe(eventName, callback1);
        emitter.subscribe(eventName, callback2);
        emitter.emit(eventName);
        (0, vitest_1.expect)(callback1).toHaveBeenCalled();
        (0, vitest_1.expect)(callback2).toHaveBeenCalled();
    });
    vitest_1.test.only('should return the results of all callbacks when emitting an event', () => {
        const callback1 = function cb1(...args) { return args.join(','); };
        const callback2 = (...args) => { return args.join(','); };
        const eventName = 'testEvent';
        emitter.subscribe(eventName, callback1);
        const sub2 = emitter.subscribe(eventName, callback2);
        (0, vitest_1.expect)(emitter.emit(eventName, [1, 2, 3])).toEqual(['1,2,3', '1,2,3']);
        sub2.unsubscribe();
        (0, vitest_1.expect)(emitter.emit(eventName, [1, 2, 3])).toEqual(['1,2,3']);
    });
    (0, vitest_1.test)('should not throw an error when emitting an event with no subscribers', () => {
        const eventName = 'testEvent';
        (0, vitest_1.expect)(() => emitter.emit(eventName)).not.toThrow();
    });
    (0, vitest_1.test)('should not call any callbacks after unsubscribing', () => {
        const callback1 = vitest_1.vi.fn();
        const callback2 = vitest_1.vi.fn();
        const eventName = 'testEvent';
        const subscription1 = emitter.subscribe(eventName, callback1);
        emitter.subscribe(eventName, callback2);
        subscription1.unsubscribe();
        emitter.emit(eventName);
        (0, vitest_1.expect)(callback1).not.toHaveBeenCalled();
        (0, vitest_1.expect)(callback2).toHaveBeenCalled();
    });
});

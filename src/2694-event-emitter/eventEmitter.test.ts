import { describe, test, expect, beforeEach, vi } from 'vitest';
import { EventEmitter } from './eventEmitter';

describe('EventEmitter', () => {
  let emitter: EventEmitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  test('should subscribe to an event and call the callback when emitted', () => {
    const callback = vi.fn();
    const eventName = 'testEvent';
    const args = [1, 2, 3];

    emitter.subscribe(eventName, callback);
    emitter.emit(eventName, args);

    expect(callback).toHaveBeenCalledWith(...args);
  });

  test('should unsubscribe from an event', () => {
    const callback = vi.fn();
    const eventName = 'testEvent';

    const subscription = emitter.subscribe(eventName, callback);
    subscription.unsubscribe();
    emitter.emit(eventName);

    expect(callback).not.toHaveBeenCalled();
  });

  test('should handle multiple subscribers for the same event', () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();
    const eventName = 'testEvent';

    emitter.subscribe(eventName, callback1);
    emitter.subscribe(eventName, callback2);
    emitter.emit(eventName);

    expect(callback1).toHaveBeenCalled();
    expect(callback2).toHaveBeenCalled();
  });

  test.only('should return the results of all callbacks when emitting an event', () => {
    const callback1 = function cb1(...args: unknown[]) { return args.join(','); }
    const callback2 = (...args: unknown[]) => { return args.join(','); }
    const eventName = 'testEvent';

    emitter.subscribe(eventName, callback1);
    const sub2 = emitter.subscribe(eventName, callback2);
    expect(emitter.emit(eventName, [1,2,3])).toEqual(['1,2,3', '1,2,3']);
    sub2.unsubscribe()
    expect(emitter.emit(eventName, [1,2,3])).toEqual(['1,2,3']);
  });

  test('should not throw an error when emitting an event with no subscribers', () => {
    const eventName = 'testEvent';

    expect(() => emitter.emit(eventName)).not.toThrow();
  });

  test('should not call any callbacks after unsubscribing', () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();
    const eventName = 'testEvent';

    const subscription1 = emitter.subscribe(eventName, callback1);
    emitter.subscribe(eventName, callback2);

    subscription1.unsubscribe();
    emitter.emit(eventName);

    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenCalled();
  });
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
class EventEmitter {
    constructor() {
        this.events = {};
    }
    subscribe(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        }
        else {
            this.events[eventName] = [callback];
        }
        return {
            unsubscribe: () => this.events[eventName].splice(this.events[eventName].findIndex((cb) => cb === callback), 1),
        };
    }
    emit(eventName, args = []) {
        var _a;
        const callbacks = (_a = this.events[eventName]) !== null && _a !== void 0 ? _a : [];
        return callbacks.map((cb) => cb.call(null, ...args));
    }
}
exports.EventEmitter = EventEmitter;

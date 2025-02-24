type Callback = (...args: unknown[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

export class EventEmitter {
  private events: Record<string, Callback[]> = {};

  subscribe(eventName: string, callback: Callback): Subscription {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }

    return {
      unsubscribe: () =>
        this.events[eventName].splice(
          this.events[eventName].findIndex((cb) => cb === callback),
          1,
        ),
    };
  }

  emit(eventName: string, args: unknown[] = []): unknown[] {
    const callbacks = this.events[eventName] ?? [];
    return callbacks.map((cb) => cb.call(null, ...args));
  }
}

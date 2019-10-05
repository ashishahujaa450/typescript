interface userProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: userProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: userProps): void {
    Object.assign(this.data, update);
  }

  //registering event in events object
  on(eventName: string, callback: Callback) {
    const handler = this.events[eventName] || [];
    handler.push(callback);
    this.events[eventName] = handler;
  }

  //trigger event using foreach
  trigger(eventName: string): void {
    const handler = this.events[eventName];

    if (!handler || handler.length === 0) {
      throw new Error('event doesnt exists');
    }

    handler.forEach((callback: Callback) => {
      callback();
    });
  }
}

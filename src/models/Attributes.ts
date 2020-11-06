import { User, UserProps } from './User';

export class Attributes<T> {
    constructor(private data: T) {}

    get = <K extends keyof T>(key: K ): T[K] => {
        return this.data[key];
    }

    // Note the use of Object.assign to copy the update props over the existing
    set(update: T): void {
        Object.assign(this.data, update);
    }

    getAll(): T {
        return this.data;
    }
}
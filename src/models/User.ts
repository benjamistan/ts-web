import { Eventing } from './Eventing';

// Creates interface for User class. Note that props are optional
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}
export class User {
    public events: Eventing = new Eventing();

    constructor(private data: UserProps) {}

    get(propName: string ): (string | number) {
        return this.data[propName];
    }

    // Note the use of Object.assign to copy the update props over the existing
    set(update: UserProps): void {
        Object.assign(this.data, update);
    }    
}
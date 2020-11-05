import { Eventing } from './Eventing';
import { Sync } from './Sync';

// Creates interface for User class. Note that props are optional
export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000';
export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

    constructor(private data: UserProps) {}

    get(propName: string ): (string | number) {
        return this.data[propName];
    }

    // Note the use of Object.assign to copy the update props over the existing
    set(update: UserProps): void {
        Object.assign(this.data, update);
    }    
}
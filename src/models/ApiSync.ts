import axios, { AxiosPromise } from 'axios';

// Constraint to force whatever comes in as <T> must have an ID prop
interface HasId {
    id?: number;
}

// extending HasId to force <T> to have ID constraint
export class ApiSync<T extends HasId> {
    constructor(public rootUrl: string) {};

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        const { id } =  data;

        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            return axios.post(this.rootUrl, data);
        }
    };
}
import axios from "axios";
import {GymApi} from "../../../openapi/out";

export class Apis {
    public readonly gym: GymApi;

    constructor(
        url: string
    ) {
        const client = axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.gym = new GymApi(undefined, url, client);
    }

}
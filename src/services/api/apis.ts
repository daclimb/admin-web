import {UserApi} from "@/services/api/user.api";
import axios from "axios";

export class Apis {
    public readonly user: UserApi;

    constructor(
        url: string
    ) {
        const client = axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.user = new UserApi(client);
    }

}
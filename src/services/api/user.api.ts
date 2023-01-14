import {AxiosInstance, AxiosResponse} from "axios";

export interface LoginRequest {
    email: string;
    password: string;
}

export class UserApi {
    constructor(
        private readonly axios: AxiosInstance
    ) {}

    public async login(request: LoginRequest): Promise<AxiosResponse> {
        return this.axios.post("/api/admin/login", request)
    }
}
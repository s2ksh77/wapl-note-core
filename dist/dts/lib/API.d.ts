import { AxiosInstance } from 'axios';
declare class API {
    instance: AxiosInstance;
    constructor();
    get(url: string, queryString?: any): Promise<import("axios").AxiosResponse<any, any>>;
    post(url: string, payload?: any): Promise<import("axios").AxiosResponse<any, any>>;
    put(url: string, payload?: any, queryString?: any): Promise<import("axios").AxiosResponse<any, any>>;
    delete(url: string): Promise<import("axios").AxiosResponse<any, any>>;
}
export default API;

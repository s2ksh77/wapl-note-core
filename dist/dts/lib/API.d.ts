import { AxiosInstance } from 'axios';
interface APIInstance extends AxiosInstance {
    get: (url: string, queryString?: any) => Promise<any>;
    post: (url: string, payload?: any, config?: any) => Promise<any>;
    put: (url: string, payload?: any, config?: any) => Promise<any>;
    delete: (url: string, config?: any) => Promise<any>;
}
declare class API {
    instance: APIInstance;
    constructor();
    get(url: string, config?: any): Promise<any>;
    post(url: string, payload?: any, config?: any): Promise<any>;
    put(url: string, payload?: any, config?: any): Promise<any>;
    delete(url: string, config?: any): Promise<any>;
}
export default API;

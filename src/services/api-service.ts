import { config } from "../config/config";
import { tokenService } from "./token-service";

enum HttpMethod
{
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete"
}

type Response<T> = {
    ok: boolean,
    data: T |null
}

class ApiService
{
    public async get<T>(url: string): Promise<Response<T>>
    {
        return this.sendRequest<null, T>(url, HttpMethod.GET)
    }

    public async post<K, T>(url: string, dataToSend: K): Promise<Response<T>>
    {
        return this.sendRequest<K, T>(url, HttpMethod.POST, dataToSend)
    }

    public async put<K, T>(url: string, dataToSend: K): Promise<Response<T>>
    {
        return this.sendRequest<K, T>(url, HttpMethod.PUT, dataToSend)
    }

    public async delete<T>(url: string): Promise<Response<T>>
    {
        return this.sendRequest<null, T>(url, HttpMethod.DELETE)
    }

    private async sendRequest<K, T>(url: string, method: HttpMethod, dataToSend: K | null = null): Promise<Response<T>>
    {
        const response = await fetch(`${config.API_BASE_URL}${url}`, {
            method: method,
            headers: this.prepareHeaders(),
            body: dataToSend ? JSON.stringify(dataToSend) : undefined
        });

        if (response.status !== 200)
        {
            console.log(`SendRequestError : ${response.status} - ${response.statusText}\n${await response.text()}`);
            return { ok: false, data: null}
        }

        try
        {
            return {
                ok: true,
                data : await response.json()
            }
        }
        catch (exception)
        {
            return {
                ok: true,
                data : null
            }
        }
    }

    private prepareHeaders(): Headers
    {
        const headers = new Headers();
        headers.set("Content-Type", "application/json");

        const token = tokenService.loadToken();
        if (token)
            headers.set("Authorization", `Bearer ${token}`)

        return headers;
    }
}

export const apiService = new ApiService();
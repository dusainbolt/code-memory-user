import axios, { AxiosResponse, AxiosInstance } from 'axios'
// import crypto from "crypto-js";

class AxiosServer {
    private instance: AxiosInstance

    constructor() {
        const instance = axios.create()
        instance.interceptors.response.use(this.handelSuccess, this.handelError)
        this.instance = instance
    }

    handelSuccess(response): AxiosResponse {
        // const {
        //     data: { data },
        //     config: { headers },
        // } = response
        // let dataResult = null
        // if (process.env.REACT_APP_API_ENV === 'local') {
        //     dataResult = data
        // } else {
        //     const decrypted = crypto.AES.decrypt(data, headers.hash_key)
        //     dataResult = JSON.parse(crypto.enc.Utf8.stringify(decrypted))
        // }
        // if (!response.data.status) {
        //     //handel show message
        // }
        return {...response.data }
    }

    handelError(error): Promise<any> {
        if (error.response && error.response.status === 401) {
            //handle
        }
        if (error.response && error.response.status === 400) {
            return error.response.data
        }
        if (!error.response || error.response.status === 500) {
            //handle show message
        }
        return Promise.reject(error);
    }

    getFullUrl(url): string {
        url =  !url.startsWith('/') ? "/" + url : url;
        const timeStamp = Date.now()
        return url;
        // let hash_key = `${process.env.REACT_APP_API_KEY}_${timeStamp}_${url}`
        // this.instance.defaults.headers.common['hash_key'] = crypto
        //     .MD5(hash_key)
        //     .toString()

        // this.instance.defaults.headers.common['timestamp'] = timeStamp
        // return `${process.env.REACT_APP_API_URL}` + url
    }

    get(endpoint: string, params: any = {}): Promise<any> {
        // this.instance.defaults.params = body
        return this.instance.get(endpoint, { params })
    }
    post(endpoint: string, body: any): Promise<any> {
        return this.instance.post(endpoint, body)
    }
    put(endpoint: string, body: any): Promise<any> {
        return this.instance.put(endpoint, body)
    }
    delete(endpoint: string): Promise<any> {
        return this.instance.delete(endpoint)
    }
}

export default new AxiosServer()

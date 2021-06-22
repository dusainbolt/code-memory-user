import { DocumentNode } from "graphql";
import { initializeApollo } from "./apollo-connect";

export default class RequestService {
    client = null;
    constructor() {
        this.client = initializeApollo();
    }

    handleResponse = (callback: string) => (res: any) => {
        // handle if client-side
        if (typeof window !== undefined) {
            console.log(res);
        }
        return callback ? res.data[callback] : res.data;
    }

    query = (query: DocumentNode, variables: any = {}, callback = ""): any => {
        return this.client.query({ query: query }, variables).then(this.handleResponse(callback));
    }

}

import { DocumentNode } from "graphql";
import { initializeApollo } from "./apollo-connect";

export default class RequestService {
    client = null;
    constructor() {
        this.client = initializeApollo();
    }

    handleResponse = (callback = "") => (res: any): any => {
        return callback ? res.data[callback] : res.data;
    }

    query = (query: DocumentNode, variables: any = {}, callback = ""): any => {
        return this.client.query({ query }, variables).then(this.handleResponse(callback));
    }

    mutation = (mutation: DocumentNode, variables: any = {}, callback = ""): any => {
        return this.client.mutate({ mutation, variables }).then(this.handleResponse(callback));
    }
}

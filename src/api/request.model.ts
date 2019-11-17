export class ResponseModel<T> {
    constructor(private body: T, private headers: Headers, private statusCode: number) {
    }

    getBody(): T {
        return this.body;
    }

    getHeaders(): Headers {
        return this.headers;
    }

    getStatusCode(): number {
        return this.statusCode;
    }
}

export class HttpRequest {
  headers: Record<string, string>;

  constructor(public url: string, headers?: HttpRequest['headers'], public body?: any) {
    this.headers = headers || {};
  }

  setHeader(name: string, value: string) {
    this.headers[name] = value;
  }
}
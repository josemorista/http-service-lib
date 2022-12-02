import { HttpRequest } from './HttpRequest';

export class HttpJSONRequest extends HttpRequest {
  constructor(url: string, headers?: HttpRequest['headers'], body?: any) {
    super(url, headers, body);
    this.setHeader('Content-Type', 'application/json');
  }
}
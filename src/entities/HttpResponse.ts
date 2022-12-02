export class HttpResponse<T> {
  constructor(readonly status: number, readonly body: T) { }
}
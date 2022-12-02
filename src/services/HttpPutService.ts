import { HttpRequest } from '../entities/HttpRequest';
import { HttpResponse } from '../entities/HttpResponse';

export interface HttpPutService {
  put<T>(request: HttpRequest): Promise<HttpResponse<T>>;
}

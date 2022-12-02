import { HttpRequest } from '../entities/HttpRequest';
import { HttpResponse } from '../entities/HttpResponse';

export interface HttpDeleteService {
  delete<T>(request: HttpRequest): Promise<HttpResponse<T>>;
}

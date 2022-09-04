import { HttpRequest } from '../entities/HttpRequest';
import { HttpResponse } from '../entities/HttpResponse';

export interface HttpPostService {
	post<T>(request: HttpRequest): Promise<HttpResponse<T>>;
}

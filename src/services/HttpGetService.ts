import { HttpRequest } from '../entities/HttpRequest';
import { HttpResponse } from '../entities/HttpResponse';

export interface HttpGetService {
	get<T>(request: HttpRequest): Promise<HttpResponse<T>>;
}

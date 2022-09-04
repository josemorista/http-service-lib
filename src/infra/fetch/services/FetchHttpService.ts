import { HttpRequest } from '../../../entities/HttpRequest';

export class FetchHttpService {
	parseRequestBody(request: HttpRequest) {
		if (request.headers['Content-Type'] && request.headers['Content-Type'].includes('application/json'))
			return JSON.stringify(request.body);
		return request.body;
	}

	async parseResponseBody<T>(response: Response) {
		let body: unknown = {};
		if (response.headers.get('Content-Type')?.includes('application/json')) {
			body = await response.json();
		} else {
			body = await response.text();
		}
		return body as T;
	}
}

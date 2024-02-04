import { HttpRequest } from '../../../entities/HttpRequest';
import { HttpResponse } from '../../../entities/HttpResponse';
import { HttpError } from '../../../errors/HttpError';
import { HttpGetService } from '../../../services/HttpGetService';
import { FetchHttpService } from './FetchHttpService';

export class FetchHttpGetService extends FetchHttpService implements HttpGetService {
  async get<T>(request: HttpRequest): Promise<HttpResponse<T>> {
    try {
      const response = await fetch(request.url, {
        headers: request.headers,
        method: 'GET',
        credentials: 'same-origin',
      });
      if (!response.ok) throw new HttpError(await response.text(), response.status);
      return new HttpResponse(response.status, await this.parseResponseBody<T>(response));
    } catch (error) {
      if (error instanceof HttpError) throw error;
      throw new HttpError('Could not reach endpoint', 404);
    }
  }
}

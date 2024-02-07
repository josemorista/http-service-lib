import { HttpRequest } from '../../../entities/HttpRequest';
import { HttpResponse } from '../../../entities/HttpResponse';
import { HttpError } from '../../../errors/HttpError';
import { HttpDeleteService } from '../../../services/HttpDeleteService';
import { FetchHttpService } from './FetchHttpService';

export class FetchHttpDeleteService extends FetchHttpService implements HttpDeleteService {
  async delete<T>(request: HttpRequest): Promise<HttpResponse<T>> {
    try {
      const response = await fetch(request.url, {
        headers: request.headers,
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) throw new HttpError(await response.text(), response.status);
      return new HttpResponse(response.status, await this.parseResponseBody<T>(response));
    } catch (error) {
      if (error instanceof HttpError) throw error;
      throw new HttpError('Could not reach endpoint', 404);
    }
  }
}

// Services
export { HttpGetService } from './services/HttpGetService';
export { HttpPostService } from './services/HttpPostService';

// Entities
export { HttpJSONRequest } from './entities/HttpJSONRequest';
export { HttpResponse } from './entities/HttpResponse';
export { HttpRequest } from './entities/HttpRequest';

// Errors
export { HttpError } from './errors/HttpError';

// Infra
import { FetchHttpGetService } from './infra/fetch/services/FetchHttpGetService';
import { FetchHttpPostService } from './infra/fetch/services/FetchHttpPostService';

export const Infra = {
	fetch: {
		FetchHttpGetService,
		FetchHttpPostService,
	},
};

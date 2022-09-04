# Http Service Lib

Presenting a reusable http library to Node.Js. This library uses well defined http client solutions to deliver scalable and reusable http services.

## Simple usage to perform JSON request

```typescript
import { apiURL } from 'consts';
import { HttpPostService, HttpError, HttpJSONRequest } from 'http-service-lib';

async function login({ email, password }: { email: string; password: string }) {
	const data = await this.httpPostService.post<{ accessToken: string }>(
		new HttpJSONRequest(
			`${apiURL}/users/sessions`,
			{
				Authorization: 'Basic 123',
			},
			{
				email,
				password,
			}
		)
	);
	return data.body;
}
```

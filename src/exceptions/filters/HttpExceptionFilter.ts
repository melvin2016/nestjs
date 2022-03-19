import { ExceptionFilter, HttpException, Catch, ArgumentsHost } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    // using for platform agnostic http adapter
    constructor(private httpAdapter: HttpAdapterHost) { }

    catch(exception: HttpException, host: ArgumentsHost) {
        // get the platform agnostic adapter
        const { httpAdapter } = this.httpAdapter;

        // get the http request context
        const ctx = host.switchToHttp();

        // get the request and response objects
        const request = ctx.getRequest();
        const response = ctx.getResponse();

        // get the exception status code
        // and message that originated
        const statusCode = exception.getStatus();
        const statusMessage = exception.message;

        // get the request url, host name, request method from the adpater
        const requestUrl = httpAdapter.getRequestUrl(request);
        const requestHostName = httpAdapter.getRequestHostname(request);
        const requestMethod = httpAdapter.getRequestMethod(request);

        // make the reponse body
        const respBody = {
            statusCode: statusCode,
            message: statusMessage,
            url: requestUrl,
            hostName: requestHostName,
            method: requestMethod
        };

        // send the reposne
        httpAdapter.reply(response, respBody, statusCode)
    }
}
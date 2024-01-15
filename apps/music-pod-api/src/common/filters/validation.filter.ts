import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { CustomValidationException } from "../exceptions/cutom-validation-exception";


@Catch(CustomValidationException)
export class ValidationFilter implements ExceptionFilter {
    catch(exception: CustomValidationException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        ctx.getResponse().status(exception.getStatus()).json({
            /* get only the neede properties here, if we destruct all props we might expose sensitive server info */
            message : exception.message,
            statusCode : exception.getStatus(),
            errors : exception.errors,
        });
    }   
}
import { HttpException } from "@nestjs/common";

/* a excpectio class to map the error property to the errors key of response */
export class CustomValidationException extends HttpException {
    errors : Record<string,string[]> | string;
    constructor(errors: any, status: number = 400) {
      super('Validation failed', status);
      this.errors = errors;
    }
}
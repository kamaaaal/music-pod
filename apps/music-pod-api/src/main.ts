import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ValidationError } from "class-validator";
import { AppModule } from "./app.module";
import { CustomValidationException } from "./common/exceptions/cutom-validation-exception";
import { ValidationFilter } from "./common/filters/validation.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new CustomValidationException(
          validationErrors.map((error) => ({
            [error.property]: Object.values(error.constraints),
          })),
        );
      },
    }),
  );
  app.useGlobalFilters(new ValidationFilter());
  await app.listen(3000);
}
bootstrap();

import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @MaxLength(15)
  @MinLength(5)
  userName: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @MinLength(7)
  password: string;
}

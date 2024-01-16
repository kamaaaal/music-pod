import axios, { AxiosResponse } from "axios";
import { ApiResponse } from "./IntegrationUtils";

const basePath = "api/users";

const loginPath = "login";

/* Dto */

/**
 * same dto for both login and signup
 */
class CreateUserDto {
  userName?: string;
  password?: string;
}

/* function */
export async function CreateUser(userDto: CreateUserDto) {
  const res = await axios.post<any, AxiosResponse<ApiResponse>, CreateUserDto>(
    basePath,
    userDto,
  );
  return res;
}

export async function LoginUser(userDto: CreateUserDto) {
  const res = await axios.post<any, AxiosResponse<ApiResponse>, CreateUserDto>(
    `${basePath}/${loginPath}`,
    userDto,
  );
  return res;
}

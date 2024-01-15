import axios, { AxiosResponse } from "axios";
import { ApiResponse } from "./IntegrationUtils";

const basePath = "api/users";

/* Dto */
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

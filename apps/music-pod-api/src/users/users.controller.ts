import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";
import { LoginDto } from "./dto/login.dto";

@Controller({
  path: "users",
})
export class usersController {
  constructor(private usersSerive: UsersService) {}

  @Post()
  private async post(@Body() body: CreateUserDto) {
    return await this.usersSerive.createUser(body);
  }

  @Post("login")
  private async login(@Body() LoginBody: LoginDto) {
    return await this.usersSerive.login(LoginBody);
  }

  @Get()
  private async getAllUsers() {
    return await this.usersSerive.getAllUsers();
  }
}

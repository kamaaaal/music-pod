import { Body, Controller ,Get,Post} from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";

@Controller({
    path : "users"
})
export class usersController{

    constructor(private UsersSerive : UsersService){}

    @Post()
    private async post(@Body() body : CreateUserDto){
        return await this.UsersSerive.createUser(body);            
    }

    @Get()
    private async getAllUsers(){
        return await this.UsersSerive.getAllUsers();
    }

    @Post('/login')
    private async login(){
        
    }
}
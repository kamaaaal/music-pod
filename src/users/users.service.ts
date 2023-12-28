import { HttpCode, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createResponse, StatusCode } from "src/utils/Responses";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./users.entity";

@Injectable()
export class UsersService{
    constructor(@InjectRepository(UserEntity) private userEntity : Repository<UserEntity>){}


    public async createUser(createUser : CreateUserDto){

        const userObj = this.userEntity.create(createUser);
        await this.userEntity.save(userObj);
        return createResponse(StatusCode.created,"user created successfully");
    }

    public async getAllUsers(){
        const users = await this.userEntity.find();
        return createResponse(StatusCode.ok,"users fetched successfully",users);
    }
        
}
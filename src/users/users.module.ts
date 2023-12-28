import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { usersController } from "./users.controller";
import { UserEntity } from "./users.entity";
import { UsersService } from "./users.service";

@Module({
    imports : [TypeOrmModule.forFeature([UserEntity])],
    providers : [UsersService],
    controllers : [usersController]
})
export class UsersModule{}
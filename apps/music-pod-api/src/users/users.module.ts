import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { usersController } from "./users.controller";
import { UserEntity } from "./users.entity";
import { UsersService } from "./users.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports : [TypeOrmModule.forFeature([UserEntity]),
    // jwt module ,
    JwtModule.register({
      global: true,
      secret: "VisiyamTopSecret",
      signOptions: { expiresIn: '30d' },
    })],
    providers : [UsersService],
    controllers : [usersController],
    exports : [UsersService]
})
export class UsersModule{}
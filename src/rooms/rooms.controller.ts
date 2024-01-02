import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateRoomDto } from "./dto/rooms.dto";
import { AuthGuard } from "src/users/auth/auth.guard";
import { RoomsService } from "./rooms.service";
import { GetUser } from "src/users/auth/getUser.decorator";
import { UserEntity } from "src/users/users.entity";

@Controller('/rooms')
export class RoomsController{
    constructor(
      private roomsService : RoomsService
    ){}
    
    @Post()
    public async createRoom (@Body() body : CreateRoomDto){
        // return await this.roomsRepository.save({
        //     roomName : "room1",
        //     // createdBy : ,
        //     status : RoomsEntity.STATUS.PAUSED,
        // })
    }

    @UseGuards(AuthGuard)
    @Get()
    public async getAllRoom (@GetUser() user: Partial<UserEntity>){
        return await this.roomsService.getAllRooms();
    }
    
}
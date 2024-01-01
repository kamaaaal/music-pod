import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateRoomDto } from "./dto/rooms.dto";
import { RoomsEntity } from "./entities/rooms.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Controller('/rooms')
export class RoomsController{
    constructor(
        @InjectRepository(RoomsEntity)
        private roomsRepository : Repository<RoomsEntity>
    ){}
    
    @Post()
    public async createRoom (@Body() body : CreateRoomDto){
        return await this.roomsRepository.save({
            roomName : "room1",
            // createdBy : ,
            status : RoomsEntity.STATUS.PAUSED,
        })
    }

    @Get()
    public async getAllRoom (){
        return this.roomsRepository.find();
    }
    
}
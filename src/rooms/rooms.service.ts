import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RoomsEntity } from "./entities/rooms.entity";
import { Repository } from "typeorm";
import { createResponse } from "src/utils/Responses";

@Injectable()
export class RoomsService{

    constructor(
        @InjectRepository(RoomsEntity)
        private roomsRepository : Repository<RoomsEntity>
    ){}

    public createRoom (){

    }
    

    public async getAllRooms(){
        const allRooms = await this.roomsRepository.find();
        return createResponse(200,"fetched All rooms successfully",{rooms :allRooms})
    }
}
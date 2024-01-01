import { Body, Controller, Post } from "@nestjs/common";
import { CreateRoomDto } from "./dto/rooms.dto";

@Controller('/rooms')
export class RoomsController{
    constructor(){}
    
    @Post()
    public createRoom (@Body() body : CreateRoomDto){
        
    }
    
}
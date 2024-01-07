import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RoomsEntity } from "./entities/rooms.entity";
import { Repository } from "typeorm";
import { createResponse } from "src/utils/Responses";
import { CreateRoomDto } from "./dto/rooms.dto";
import { UserEntity } from "src/users/users.entity";

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomsEntity)
    private roomsRepository: Repository<RoomsEntity>,
  ) {}

  public async createRoom(
    body: CreateRoomDto,
    user: Omit<UserEntity, "password">,
  ) {
    const roomCreated = await this.roomsRepository.save({
      roomName: body.roomName,
      createdBy: user,
    });
    // console.log(roomCreated)
    return createResponse(201, "Room created successfully", {
      roomId: roomCreated.roomId,
      roomName: roomCreated.roomName,
    });
  }

  public async getAllRooms() {
    const allRooms = await this.roomsRepository.find();
    return createResponse(200, "fetched All rooms successfully", {
      rooms: allRooms,
    });
  }

  //!todo add songs to room service functions to be added implementing socket connection
}

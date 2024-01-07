import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RoomsSongsEntity } from "src/rooms/entities/roomSongs.entity";
import { UserEntity } from "src/users/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(RoomsSongsEntity)
    private RoomsSongsRepo: Repository<RoomsSongsEntity>,
  ) {}

  public async addSongToRoom(songUrl: string, user: Partial<UserEntity>) {
    this.RoomsSongsRepo.save({
      songUrl: songUrl,
      addedBy: user,
      room: user.connectedRoom,
    });
  }
}

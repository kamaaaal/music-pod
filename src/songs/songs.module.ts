import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// for now importing roomsSongs entity from rooms module, in future decide for the best position for this entity
import { RoomsSongsEntity } from 'src/rooms/entities/roomSongs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomsSongsEntity])],
  providers: [SongsService]
})
export class SongsModule {}

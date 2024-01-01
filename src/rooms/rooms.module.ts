import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsEntity } from './entities/rooms.entity';
import { RoomsController } from './rooms.controller';

@Module({
    imports : [TypeOrmModule.forFeature([RoomsEntity])],
    controllers : [RoomsController],
})
export class RoomsModule {}

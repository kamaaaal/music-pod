import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsEntity } from './entities/rooms.entity';
import { RoomsController } from './rooms.controller';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { UsersModule } from 'src/users/users.module';
import { RoomsService } from './rooms.service';

@Module({
    imports : [TypeOrmModule.forFeature([RoomsEntity]), UsersModule],
    providers : [RoomsService],
    controllers : [RoomsController],
})
export class RoomsModule {}

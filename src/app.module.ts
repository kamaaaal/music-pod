import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './users/auth/auth.guard';
import { YtStreamModule } from './yt-stream/yt-stream.module';
import { SongsModule } from './songs/songs.module';

const dbModule = TypeOrmModule.forRoot({
  type : "sqlite",//!todo keep it outSide of dist
  database : "./sqlite.db",
  entities: ["dist/**/*.entity{.ts,.js}"],
  autoLoadEntities : true,
  synchronize : true,
})

@Module({
  imports: [dbModule,UsersModule,RoomsModule, YtStreamModule, SongsModule  ],
  controllers: [AppController],
  providers: [AppService,
  /* to enable auth guard to whole app */
  //   {
  //   provide: APP_GUARD,
  //   useClass: AuthGuard,
  // }
],
})
export class AppModule {}

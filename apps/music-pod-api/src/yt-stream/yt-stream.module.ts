import { Module } from "@nestjs/common";
import { YtStreamService } from "./yt-stream.service";
import { YtStreamController } from "./yt-stream.controller";

@Module({
  providers: [YtStreamService],
  controllers: [YtStreamController],
})
export class YtStreamModule {}

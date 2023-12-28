import { Module } from '@nestjs/common';
import { YtAudioController } from './yt-audio.controller';
import { YtAudioService } from './yt-audio.service';

@Module({
  controllers: [YtAudioController],
  providers: [YtAudioService]
})
export class YtAudioModule {}

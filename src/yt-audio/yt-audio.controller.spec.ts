import { Test, TestingModule } from '@nestjs/testing';
import { YtAudioController } from './yt-audio.controller';

describe('YtAudioController', () => {
  let controller: YtAudioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YtAudioController],
    }).compile();

    controller = module.get<YtAudioController>(YtAudioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { YtAudio } from './yt-audio.service';

describe('YtAudio', () => {
  let provider: YtAudio;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YtAudio],
    }).compile();

    provider = module.get<YtAudio>(YtAudio);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

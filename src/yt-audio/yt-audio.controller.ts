import { Body, Controller, Post } from '@nestjs/common';
import { YtAudioService } from './yt-audio.service';
import { AddSongToPlaylist } from './dto/addSongToPlaylist';

@Controller('yt-audio')
export class YtAudioController {

   constructor(
            private ytAudioService : YtAudioService
    ){}

    @Post()
    private addToPlayList(@Body() body : AddSongToPlaylist){
        return this.ytAudioService.addToPlaylist(body);
    }

}




const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

const url = "https://www.youtube.com/watch?v=a3HZ8S2H-GQ";

async function main (){
    const songInfo = await ytdl.getInfo(url);
    const stream = await ytdl.downloadFromInfo(songInfo,{ quality: 'highestaudio' });
    // const songFormats = 
    stream.pipe(fs.createWriteStream('./song.mp3'))
    
}
// main();

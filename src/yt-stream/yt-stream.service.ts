import { Injectable } from "@nestjs/common";
import * as ytdl from "ytdl-core";

Injectable()
export class YtStreamService{

    public async getSongStream(songLink : string){
        const songInfo = await ytdl.getInfo(songLink);
        const stream = ytdl.downloadFromInfo(songInfo,{ quality: 'highestaudio' });
        return stream;
    }
}
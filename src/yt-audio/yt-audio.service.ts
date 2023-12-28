import { Body, Injectable } from '@nestjs/common';
import { AddSongToPlaylist } from './dto/addSongToPlaylist';

@Injectable()
export class YtAudioService {
    
    public addToPlaylist(body:AddSongToPlaylist){
        return "done";
    }

    /**
     * a playlist in here is like a room
     * // may refactor all of them with a catchy term for room in future
     */
    public createPlayList(){
        
    }

}

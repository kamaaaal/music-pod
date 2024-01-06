import { Controller, Get, Query, StreamableFile } from "@nestjs/common";
import { YtStreamService } from "./yt-stream.service";

/*  
    this is just an example controller 
    to create stream which can we used directly in  html audio tag
*/
@Controller('stream')
export class YtStreamController {
    constructor(private ytSreamService : YtStreamService){}

    @Get('song')
    private async StreamSong(@Query('song') songUrl : string){
        const stream = await this.ytSreamService.getSongStream(songUrl);
        // stream.on('data',data => console.log(data));
        return new StreamableFile(stream);
    }

    // create a new route which will return an html file where a input for song url and a button to play the song
    // when user click on the button it will play the song by using the above route
    // hint: use the html audio tag
    @Get('play')
    private async playSong(){
        // create html as an string
        // add a stop button to stop the song
        const html = `
            <html>
                <body>
                    <input type="text" id="songUrl" />
                    <audio id='songDiv' controls src=""></audio>
                    <button onclick="playSong()">Play</button>
                    <button onclick="stopSong()">Stop</button>
                    <script>
                        let audio;
                        function playSong(){
                            const songUrl = document.getElementById('songUrl').value;
                            // audio = new Audio(\`/api/stream/song?song=\${songUrl}\`);
                            audio = document.getElementById('songDiv');
                            audio.src = \`/api/stream/song?song=\${songUrl}\`;
                            audio.play();
                        }
                        function stopSong(){
                            audio.pause();
                        }


                    </script>
                </body>
            </html>
        `;
        return html;
    }
}


const fs = require('fs');
const ytdl = require('ytdl-core');
// an example snippet to get a stream of a song
const url = "https://www.youtube.com/watch?v=a3HZ8S2H-GQ";

async function main (){
    const songInfo = await ytdl.getInfo(url);
    const stream = await ytdl.downloadFromInfo(songInfo,{ quality: 'highestaudio' });
    // const songFormats = 
    stream.pipe(fs.createWriteStream('./song.mp3'))
    
}
main();
import React from "react";
import Song from "./Song"

const SongList = (props) => {

        return  (
            <div>
                <table style={{width: "100%"}}>
                    <tr className="song-header">  
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>

              {props.songs.map((item) => (
                  
                <Song song={item} key={item.id}/>
                ))}

                </table>
                <p></p>
            </div>
        )
}

export default SongList
import React from "react";
import Song from "./Song"

const SongList = (props) => {

        return  (
            <div>

                <button onClick={() => props.sortTitle()}>Sort (A-Z){" "}</button>
                <button onClick={() => props.sortRating()}>Sort (Rating)</button>
                
                <table style={{width: "100%"}}>

                    <tr className="song-header">  
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>

                    {props.songs.map((item) => (
                        <Song song={item} key={item.id} deleteItem={props.deleteItem}/>
                        ))}

                </table>
            </div>
        )
}

export default SongList
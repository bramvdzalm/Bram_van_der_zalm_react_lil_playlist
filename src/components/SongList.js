import React from "react";
import Song from "./Song"
import { FaSort } from "react-icons/fa"

const SongList = (props) => {

        return  (
            <div> 
                <table>
                    <thead>
                        <tr className="song-header">  
                            <th>Artist 
                                <button className="songlist-icon-sort" onClick={() => props.sortArtist()}><FaSort/>{" "}</button>                          
                            </th>
                            <th >Title 
                                <button className="songlist-icon-sort" onClick={() => props.sortTitle()}><FaSort/>{" "}</button>                              
                            </th>
                            <th>Genre
                                <button className="songlist-icon-sort" onClick={() => props.sortGenre()}><FaSort/>{" "}</button>
                            </th>
                            <th>Rating
                                <button className="songlist-icon-sort" onClick={() => props.sortRating()}><FaSort/></button>
                            </th>
                        </tr>
                    </thead>
                        
                        {props.songs.map((item) => (
                        <Song song={item} key={item.id} id={item.id} deleteItem={props.deleteItem}/>
                        ))}
                </table>
            </div>
        )
}

export default SongList
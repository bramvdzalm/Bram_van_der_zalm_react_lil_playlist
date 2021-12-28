import React from "react";
import SongList from "./SongList";
import SongForm from "./SongForm";

class SongOverview extends React.Component {

    constructor() {
      super()
      this.state = {
        songs: [{
            id: 1,
            artist: "Purple Disco Machine",
            title: "Let the sun shine",
            genre: "Deep House",
            rating: "5",
        },
          {
            id: 2,
            artist: "Elton John",
            title: "Cold Heart",
            genre: "Pop",
            rating: "3",
        }
        ]
      }
    }
  
    addSong = (song) => {
        this.setState({
          songs: [...this.state.songs].concat([song]),
        });
      };

    sortTitle = () => {
        let songs = [...this.state.songs]
        let sortedSongs = songs.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)

        this.setState({
          songs: sortedSongs,
        });
      };
    
    sortRating = () => {
        let songs = [...this.state.songs]
        let sortedSongs = songs.sort((a,b) => b.rating - a.rating)

        this.setState({
            songs: sortedSongs
        })
    }

    deleteItem = (id) => {
      let newList = [...this.state.songs];
      let pos = newList.indexOf(id);
      newList.splice(pos,1);
      this.setState({
        songs: newList
        })
    }

    render() {
      return (
        <div>                     
          <SongForm addSong={this.addSong} />
          <SongList songs={this.state.songs} 
                    sortTitle={this.sortTitle} 
                    sortRating={this.sortRating}
                    deleteItem={this.deleteItem}
                    />
        </div>
      );
    }
  }
  
  export default SongOverview;

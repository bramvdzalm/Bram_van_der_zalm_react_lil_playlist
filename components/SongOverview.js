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
  
    render() {
      return (
        <div>                     
          <SongForm addSong={this.addSong} />
          <SongList songs={this.state.songs}/>
        </div>
      );
    }
  }
  
  export default SongOverview;

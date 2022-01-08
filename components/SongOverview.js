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
        },
          {
            id: 3,
            artist: "Eddy M",
            title: "Really Really Hot",
            genre: "Tech House",
            rating: "4",
        },
          {
            id: 4,
            artist: "Billy Gillies",
            title: "Nostalgia",
            genre: "Trance",
            rating: "1",
        }
        ]
      }
    }

    addSong = (song) => {
        this.setState({
          songs: [...this.state.songs].concat([song]),
        });
      };

    sortArtist = () => {
      this.setState({
        songs: this.state.order
          ? this.state.songs.sort((a, b) => a.artist> b.artist ? 1 : -1)
          : this.state.songs.reverse((a, b) => b.artist > a.artist ? 1 : -1),
        order: !this.state.order,
      });
    }

    sortTitle = () => {
      this.setState({
        songs: this.state.order
          ? this.state.songs.sort((a, b) => a.title> b.title ? 1 : -1)
          : this.state.songs.reverse((a, b) => b.title > a.title ? 1 : -1),
        order: !this.state.order,
      });
    }

    sortGenre = () => {
      this.setState({
        songs: this.state.order
          ? this.state.songs.sort((a, b) => a.genre> b.genre ? 1 : -1)
          : this.state.songs.reverse((a, b) => b.genre > a.genre ? 1 : -1),
        order: !this.state.order,
      });
    }

    sortRating = () => {
      this.setState({
        songs: this.state.order
          ? this.state.songs.sort((a, b) => a.rating> b.rating ? 1 : -1)
          : this.state.songs.reverse((a, b) => b.rating > a.rating ? 1 : -1),
        order: !this.state.order
      });
    }  

    deleteItem = (index) => {
      let newList = this.state.songs.filter(item => item.id !== index)
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
                      sortArtist={this.sortArtist}                  
                      sortGenre={this.sortGenre}                                         
                      sortRating={this.sortRating}                  
                      deleteItem={this.deleteItem}
                      />
        </div>
      );
    }
  }
  
  export default SongOverview;

import React from "react";

class SongForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            artist: "",
            genre: "",
            rating: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      }

    handleClick(event) {
    event.preventDefault();
    const id = Math.random().toString(16).substr(2, 6);
    const newSong = {
        id: id,
        title: this.state.title,
        artist: this.state.artist,
        genre: this.state.artist,
        rating: this.state.rating,    
    };
    
        this.props.addSong(newSong);
        
        this.setState({
          title: "",
          artist: "",
          genre: "",
          rating: "",
        });
      }
      

    render(){
        return (<div >
            <form >
                
                <input
                    type="text"
                    placeholder="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="artist"
                    name="artist"
                    value={this.state.artist}
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="genre"
                    name="genre"
                    value={this.state.genre}
                    onChange={this.handleChange}
                ></input>
                <label>rating</label>
                    <select
                    placeholder="rating"
                    name="rating"
                    value={this.state.rating}
                    onChange={this.handleChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>

                    <button onClick={this.handleClick}>ADD</button>     
            </form>
        </div>
        )
    }
}

export default SongForm
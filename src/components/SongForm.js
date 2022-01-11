import React from "react";
import { FaPlus } from "react-icons/fa"

class SongForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            artist: "",
            title: "",
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
        artist: this.state.artist,
        title: this.state.title,
        genre: this.state.genre,
        rating: this.state.rating,    
    };
    
        this.props.addSong(newSong);
        
        this.setState({
          artist: "",
          title: "",
          genre: "",
          rating: "",
        });
      }
      

    render(){
        return (<div >
            <form className="form-container">
                <input
                    type="text"
                    className="form-input form-input-field"
                    placeholder="artist"
                    name="artist"
                    value={this.state.artist}
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    className="form-input form-input-field"
                    placeholder="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    className="form-input form-input-field"
                    placeholder="genre"
                    name="genre"
                    value={this.state.genre}
                    onChange={this.handleChange}
                ></input>
                <label>Rating:
                    <select
                    className="form-input"
                    placeholder="rating"
                    name="rating"
                    value={this.state.rating}
                    onChange={this.handleChange}
                >
                    <option value="">*</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                    </label>

                    <button className="form-icon-plus" onClick={this.handleClick}><FaPlus /></button>     
            </form>
        </div>
        )
    }
}

export default SongForm
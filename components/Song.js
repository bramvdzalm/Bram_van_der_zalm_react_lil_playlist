import React from "react";
import { FaTimes } from "react-icons/fa"

const Song = (props) => {

  const {id, title, artist, genre, rating} = props.song;

  return (
    <tr>
      <td>{artist}</td>
      <td>{title}</td>
      <td>{genre}</td>
      <td>{rating}</td>
      <p className="song-icon-delete" onClick={() => props.deleteItem(id)}><FaTimes/></p>
    </tr>
  );
};

export default Song
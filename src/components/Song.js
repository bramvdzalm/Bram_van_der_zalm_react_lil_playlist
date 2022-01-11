import React from "react";
import { FaTimes } from "react-icons/fa"

const Song = (props) => {

  const {id, title, artist, genre, rating} = props.song;

  return (
    <tbody>
        <tr>
          <td>{artist}</td>
          <td>{title}</td>
          <td>{genre}</td>
          <td>{rating}</td>
          <td className="song-icon-delete" onClick={() => props.deleteItem(id)}><FaTimes/></td>
        </tr>
    </tbody>
  );
};

export default Song
import React from "react";

const Song = (props) => {
  const {title, artist, genre, rating} = props.song;

  return (
    <tr>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{genre}</td>
      <td>{rating}</td>
    </tr>
  );
};

export default Song
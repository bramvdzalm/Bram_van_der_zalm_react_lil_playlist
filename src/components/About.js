import React from "react";

function About() {
    return (
      <div >
          <h2>About me</h2>
             <div>
                <p>This project "Playlist" is made by Bram vd Zalm during the course Front end development at Winc Academy.</p>
                <p>See here below a list of the additional points:</p>
                    <ul className="about-ul">
                        <li>Sort the songs by artist, title, genre and stars</li>
                        <li>Delete songs from the state</li>
                        <li>Add a little menu with an about-button and home-button in the header</li>
                    </ul>
             </div>
      </div>

    );
  }
  
  export default About;
import memesData from "../memesData";
import React from "react";
export default function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: memesArray[randomNumber].url
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top" />
        <input type="text" className="form--input" placeholder="bottom" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={memeImage.randomImage} className="meme--image" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </main>
  );
}

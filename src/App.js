import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Resizer from "react-image-file-resizer";

import resizeImg from "resize-img";
import Compress from "compress.js";

function App() {
  const uploadFile = async (files) => {
    const compress = new Compress();
    const smolImg = [];
    compress
      .compress(files, {
        size: 0.5, // the max size in MB, defaults to 2MB
        quality: 0.5, // the quality of the image, max is 1,
        maxWidth: 300,
        resize: true, // defaults to true, set false if you do not want to resize the image width and height
        rotate: false, // See the rotation section below
      })
      .then((data) => {
        // returns an array of compressed images
        console.log(data);
      });
    console.log(files);
  };
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => {
            const files = Array.from(e.target.files);
            uploadFile(files);
          }}
        ></input>
      </header>
    </div>
  );
}

export default App;

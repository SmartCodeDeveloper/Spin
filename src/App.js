import React, { useState, useEffect } from "react";
import NFT from "./NFT";
import data from "./data";
import "./App.css";
import line from "./assets/img/line.png";

function App() {
  const [nfts, setNfts] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastindex = nfts.length - 1;
    //    alert(lastindex);
    if (index < 0) {
      setIndex(lastindex);
    }
    if (index > lastindex) {
      setIndex(0);
    }
  }, [index, nfts]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 300);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="section">
      <div className="section-center">
        {nfts.map((nft, nftIndex) => {
          return (
            <NFT key={nft.id} {...nft} nftIndex={nftIndex} index={index} />
          );
        })}
        <img className="line" src={line} alt="Image" />
      </div>
      <div className="spinbtn">
        <button>SPIN</button>
      </div>
    </div>
  );
}

export default App;

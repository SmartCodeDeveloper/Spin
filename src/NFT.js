import React from "react";
import nfts from "./data";

const NFT = ({ id, image, nftIndex, index }) => {
  let position = "";

  if (nftIndex === index) {
    position = "activeSlide";
  }
  if (nftIndex === index + 1) {
    position = "nextSlide";
  }

  if (nftIndex === index + 2) {
    position = "morenextSlide";
  }

  if (nftIndex < index) {
    position = "LrestSlide";
  }
  if (nftIndex > index + 2) {
    position = "RrestSlide";
  }

  if (index === 5 && nftIndex == 0) {
    position = "morenextSlide";
  }
  if (index === 5 && nftIndex == 1) {
    position = "RrestSlide";
  }

  if (index === 6 && nftIndex == 0) {
    // alert(index);
    position = "nextSlide";
  }

  if (index === 6 && nftIndex == 1) {
    position = "morenextSlide";
  }
  if (index === 6 && nftIndex == 2) {
    position = "RrestSlide";
  }

  return (
    <article className={position} key={id}>
      <img src={image} alt="Image" className="nft-img" />
    </article>
  );
};
export default NFT;

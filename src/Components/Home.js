import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "../styles/home.css";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import "../styles/imageSlider.css";

function Home() {
  return (
    <>
      <ImageSlider />
      <section class="trending-albums">
        <h2 class="trending">Trending Albums</h2>

        <div class="covers">
          <p>Eternal Atake | Lil Uzi</p>
          <img
            src="https://img.secure.cdn2.wmgecom.com/media/catalog/product/cache/1624/image/600x/9df78eab33525d08d6e5fb8d27136e95/0/7/075679831934.jpg"
            alt="Uzi Album Cover"
          />
        </div>

        <div class="covers">
          <p>DarkSkyn | Daylyt</p>
          <img
            src="https://pbs.twimg.com/media/Dq8v_ylVAAAGq3b.jpg"
            alt="DarkSkyn Album Cover"
          />
        </div>

        <div class="covers">
          <p>My Turn | Lil Baby</p>
          <img
            src="https://hiphop-n-more.com/wp-content/uploads/2020/03/My-Turn.jpg"
            alt="My Turn Album Cover"
          />
        </div>

        <div class="covers">
          <p>Legends Never Die | Juice Wrld</p>
          <img
            src="https://cdn.vox-cdn.com/thumbor/r1CVRA2R6wiosPz8weltI8-o2w4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20102753/merlin_92065003.jpg"
            alt="Legends Never Die Album Cover"
          />
        </div>

        <div class="covers">
          <p>The Slow Rush | Tame Impala</p>
          <img
            src="https://media.pitchfork.com/photos/5e41992daf0b890008c98164/1:1/w_600/The%20Slow%20Rush_Tame%20Impala.jpg"
            alt="The Slow Rush Album"
          />
        </div>

        <div class="covers">
          <p>Anniversary | Bryson Tiller</p>
          <img
            src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/vsdiltzohm6czedjfgfn/bryson-tiller-anniversary"
            alt="Anniversary Album Cover"
          />
        </div>

        <div class="button">
          <Link to="/products">Shop All Albums</Link>
        </div>
      </section>
    </>
  );
}

export default Home;

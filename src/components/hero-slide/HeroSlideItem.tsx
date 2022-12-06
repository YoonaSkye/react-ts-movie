import React from 'react';

import { MovieObject } from '../../api/api';
import apiConfig from '../../api/apiConfig';

type HeroSlideItemProp = {
  item: MovieObject;
  clssName: string;
};

const HeroSlideItem = ({ item, clssName }: HeroSlideItemProp) => {
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div
      className={`hero-slide__item ${clssName}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <div className="title">{item.title}</div>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <button>Watch Now</button>
            <button>Watch Trailer</button>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="poster" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;

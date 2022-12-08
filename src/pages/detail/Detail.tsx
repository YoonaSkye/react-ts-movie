import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Category, MovieObject, TvObject } from '../../api/api';
// api
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';
import CastList from './CastList';

// styles
import './detail.scss';

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState<MovieObject | TvObject | null>(null);
  const bg = apiConfig.originalImage(item?.backdrop_path || item?.poster_path);

  useEffect(() => {
    const getDetail = async () => {
      let params = {};
      let response = await tmdbApi.detail(category as Category, id as string, {
        params,
      });
      // console.log(response);
      setItem(response);
      window.scrollTo(0, 0);
    };

    getDetail();
  }, [category, id]);

  return (
    <>
      {/* banner */}
      <div
        className="banner"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="mb-3 movie-content container">
        <div className="movie-content__poster">
          <div
            className="movie-content__poster__img"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item?.poster_path || item?.backdrop_path
              )})`,
            }}
          ></div>
        </div>
        <div className="movie-content__info">
          {/* 如何进行高效的类型收窄？ */}
          {/* @ts-ignore */}
          <h1 className="title">{item?.title || item?.name}</h1>
          <div className="genres">
            {/* @ts-ignore */}
            {item?.genres &&
              // @ts-ignore
              item.genres.slice(0, 5).map((genre, i) => (
                <span key={i} className="genres__item">
                  {genre.name}
                </span>
              ))}
          </div>
          <p className="overview">{item?.overview}</p>
          <div className="cast">
            <div className="section__header">
              <h2>Casts</h2>
            </div>
            {/* CastList */}
            <CastList id={id} />
          </div>
        </div>
      </div>
      {/* detail */}
    </>
  );
};

export default Detail;

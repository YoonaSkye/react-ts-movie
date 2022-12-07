import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../movie-card/MovieCard';

// types
import { Category, MType, MovieObject, TvObject } from '../../api/api';
// api
import tmdbApi from '../../api/tmdbApi';
// styles
import './movie-list.scss';

type MovieListProps = {
  category: Category;
  type: MType;
};

type ItemsType = MovieObject[] | TvObject[] | null;

const MovieList = ({ category, type }: MovieListProps) => {
  const [items, setItems] = useState<ItemsType>(null);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      switch (category) {
        case 'movie':
          response = await tmdbApi.getMoviesList(type, { params });
          break;
        default:
          response = await tmdbApi.getTvList(type, { params });
      }
      setItems(response.results);
    };
    getList();
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {items &&
          items.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard item={item} category={category} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import HeroSlideItem from './HeroSlideItem';
import tmdbApi from '../../api/tmdbApi';

// types
import { MovieObject } from '../../api/api';

// styles
import 'swiper/css';
import './hero-slide.scss';

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState<MovieObject[] | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      const params = {
        page: 1,
      };
      try {
        const response = await tmdbApi.getMoviesList('popular', { params });
        setMovieItems(response.results.slice(1, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {movieItems &&
          movieItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSlideItem
                  item={item}
                  clssName={isActive ? 'active' : ''}
                />
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroSlide;

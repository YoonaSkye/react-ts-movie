import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// types
import { ItemsType, Category } from '../../api/api';

// api
import tmdbApi from '../../api/tmdbApi';
import { OutlineButton } from '../button/Button';
import MovieCard from '../movie-card/MovieCard';

// styles
import './movie-grid.scss';
import MovieSearch from './MovieSearch';

type MovieGridProps = {
  category?: string;
};

const MovieGrid = ({ category }: MovieGridProps) => {
  const [items, setItems] = useState<ItemsType>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = {};

      if (keyword === undefined) {
        const params = {};
        switch (category) {
          case 'movie':
            response = await tmdbApi.getMoviesList('upcoming', { params });
            break;
          default:
            response = await tmdbApi.getTvList('popular', { params });
        }
      } else {
        const params = {
          query: keyword,
        };

        response = await tmdbApi.search(category as Category, { params });
      }
      // @ts-ignore
      setItems(response.results);
      // @ts-ignore
      setTotalPages(response.total_pages);
    };
    getList();
  }, [category, keyword]);

  // 处理 Load More 功能
  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: currentPage + 1,
      };

      switch (category) {
        case 'movie':
          response = await tmdbApi.getMoviesList('upcoming', { params });
          break;
        default:
          response = await tmdbApi.getTvList('popular', { params });
      }
    } else {
      const params = {
        page: currentPage + 1,
        query: keyword,
      };

      response = await tmdbApi.search(category as Category, { params });
    }

    // @ts-ignore
    setItems([...items, ...response.results]);

    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="section mb-3">
        <MovieSearch category={category} />
      </div>
      <div className="movie-grid">
        {items?.map((item, i) => (
          <MovieCard key={i} item={item} category={category as Category} />
        ))}
      </div>
      {currentPage < totalPages ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Load More
          </OutlineButton>
        </div>
      ) : null}
    </div>
  );
};

export default MovieGrid;

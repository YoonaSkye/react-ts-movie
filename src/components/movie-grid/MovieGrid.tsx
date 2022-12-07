import { useState, useEffect } from 'react';

// types
import { ItemsType, Category } from '../../api/api';

// api
import tmdbApi from '../../api/tmdbApi';
import { OutlineButton } from '../button/Button';
import MovieCard from '../movie-card/MovieCard';

// styles
import './movie-grid.scss';

type MovieGridProps = {
  category?: string;
};

const MovieGrid = ({ category }: MovieGridProps) => {
  const [items, setItems] = useState<ItemsType>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      switch (category) {
        case 'movie':
          response = await tmdbApi.getMoviesList('upcoming', { params });
          break;
        default:
          response = await tmdbApi.getTvList('popular', { params });
      }
      setItems(response.results);
      // @ts-ignore
      setTotalPages(response.total_pages);
    };
    getList();
  }, [category]);

  // 处理 Load More 功能
  const loadMore = async () => {
    let response = null;
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
    // @ts-ignore
    setItems([...items, ...response.results]);

    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
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

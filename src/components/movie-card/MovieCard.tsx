import { Link } from 'react-router-dom';

// types
import { MovieObject, TvObject, Category } from '../../api/api';
// api
import apiConfig from '../../api/apiConfig';
// styles
import './movie-card.scss';

type MovieCardProp = {
  item: MovieObject | TvObject;
  category: Category;
};

const MovieCard = ({ item, category }: MovieCardProp) => {
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  const link = '/' + category + '/' + item.id;
  let title = '';
  if ('title' in item) {
    title = item.title;
  } else {
    title = item.name;
  }

  return (
    <Link to={link}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <h3>{title}</h3>
    </Link>
  );
};

export default MovieCard;

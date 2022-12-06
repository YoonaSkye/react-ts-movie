// types
import { Category, MType } from '.././../api/api';

// components
import MovieList from '../movie-list/MovieList';

type SlideType = {
  name: string;
  category: Category;
  type: MType;
}[];

const slideType: SlideType = [
  { name: 'Trending Movies', category: 'movie', type: 'popular' },
  { name: 'Top Rated Movies', category: 'movie', type: 'top_rated' },
  { name: 'Trending TV', category: 'tv', type: 'popular' },
  { name: 'Top Rated TV', category: 'tv', type: 'top_rated' },
];

const MovieSlide = () => {
  return (
    <div className="container">
      {slideType.map((item) => (
        <div key={item.name} className="section mb-3">
          <div className="section__header mb-2">
            <h2>{item.name}</h2>
            {/* view more 按钮 */}
          </div>
          <MovieList category={item.category} type={item.type} />
        </div>
      ))}
    </div>
  );
};

export default MovieSlide;

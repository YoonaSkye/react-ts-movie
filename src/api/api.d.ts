type Category = 'movie' | 'tv';
type MovieType = 'upcoming' | 'popular' | 'top_rated';
type TvType = 'popular' | 'top_rated' | 'on_the_air';
type MType = 'popular' | 'top_rated';

interface MovieObject {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface TvObject {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface VideoObject {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface List<T> {
  results: T[];
}

export {
  Category,
  MType,
  MovieType,
  TvType,
  MovieObject,
  TvObject,
  VideoObject,
  List,
};

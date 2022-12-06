import axiosClient from './axiosClient';
import {
  Category,
  MovieType,
  TvType,
  MovieObject,
  TvObject,
  VideoObject,
  List,
} from './api';

// export const category = {
//   movie: 'movie',
//   tv: 'tv',
// };

// export const movieType = {
//   upcoming: 'upcoming',
//   popular: 'popular',
//   top_rated: 'top_rated',
// };

// export const tvType = {
//   popular: 'popular',
//   top_rated: 'top_rated',
//   on_the_air: 'on_the_air',
// };

const tmdbApi = {
  getMoviesList: (type: MovieType, params: {}): Promise<List<MovieObject>> => {
    const url = 'movie/' + type;
    return axiosClient.get(url, params);
  },
  getTvList: (type: TvType, params: {}): Promise<List<TvObject>> => {
    const url = 'tv/' + type;
    return axiosClient.get(url, params);
  },
  getVideos: (cate: Category, id: number): Promise<List<VideoObject>> => {
    const url = cate + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (cate: Category, params: {}) => {
    const url = 'search/' + cate;
    return axiosClient.get(url, params);
  },
  detail: (cate: Category, id: number, params: {}) => {
    const url = cate + '/' + id;
    return axiosClient.get(url, params);
  },
  credits: (cate: Category, id: number) => {
    const url = cate + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate: Category, id: number) => {
    const url = cate + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;

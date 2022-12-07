import axiosClient from './axiosClient';
import {
  Category,
  MovieType,
  TvType,
  MovieObject,
  TvObject,
  VideoObject,
  CastsObject,
  List,
} from './api';

const tmdbApi = {
  getMoviesList: (type: MovieType, params: {}): Promise<List<MovieObject>> => {
    const url = 'movie/' + type;
    return axiosClient.get(url, params);
  },
  getTvList: (type: TvType, params: {}): Promise<List<TvObject>> => {
    const url = 'tv/' + type;
    return axiosClient.get(url, params);
  },
  getVideos: (cate: Category, id: string): Promise<List<VideoObject>> => {
    const url = cate + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (cate: Category, params: {}) => {
    const url = 'search/' + cate;
    return axiosClient.get(url, params);
  },
  detail: (
    cate: Category,
    id: string,
    params: {}
  ): Promise<MovieObject | TvObject> => {
    const url = cate + '/' + id;
    return axiosClient.get(url, params);
  },
  credits: (cate: Category, id?: string): Promise<CastsObject> => {
    const url = cate + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate: Category, id: string) => {
    const url = cate + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;

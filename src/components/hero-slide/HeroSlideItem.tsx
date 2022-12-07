import { useNavigate } from 'react-router-dom';

import { MovieObject } from '../../api/api';
import apiConfig from '../../api/apiConfig';
import Button, { OutlineButton } from '../button/Button';

type HeroSlideItemProp = {
  item: MovieObject;
  clssName: string;
};

const HeroSlideItem = ({ item, clssName }: HeroSlideItemProp) => {
  const navigate = useNavigate();

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div
      className={`hero-slide__item ${clssName}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <div className="title">{item.title}</div>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate(`/movie/${item.id}`)}>
              Watch Now
            </Button>
            {/* 新增trailer窗口预览视频 */}
            <OutlineButton>Watch Trailer</OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="poster" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// types
import { Cast, Category } from '../../api/api';
// api
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

type CaseListProps = {
  id?: string;
};

const CastList = ({ id }: CaseListProps) => {
  const [casts, setCasts] = useState<Cast[] | null>(null);
  const { category } = useParams();

  useEffect(() => {
    const getCasts = async () => {
      const response = await tmdbApi.credits(category as Category, id);
      setCasts(response.cast.slice(0, 5));
    };

    getCasts();
  }, [category, id]);
  return (
    <div className="casts">
      {casts?.map((item, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;

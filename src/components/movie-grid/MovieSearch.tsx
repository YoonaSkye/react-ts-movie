import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/Button';

type MovieSearchProps = {
  category?: string;
  keyword?: string;
};

const MovieSearch = ({ category, keyword: kw }: MovieSearchProps) => {
  const [keyword, setKeyword] = useState(kw ? kw : '');
  const navigate = useNavigate();

  const search = () => {
    if (keyword && keyword.trim().length > 0) {
      navigate(`/${category}/search/${keyword}`);
    }
  };

  // useEffect(() => {
  //   const enetrEvent = (e: KeyboardEvent) => {
  //     e.preventDefault();
  //     search()
  //   };

  //   document.addEventListener('keyup', enetrEvent);
  // });

  return (
    <div className="movie-search">
      <input
        type="text"
        placeholder="Enter a keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={search}>
        search
      </Button>
    </div>
  );
};

export default MovieSearch;

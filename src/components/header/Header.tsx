import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// style && images
import './header.scss';
import Logo from '../../assets/tmovie.png';

const headerNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movies',
    path: '/movie',
  },
  {
    display: 'TV Series',
    path: '/tv',
  },
];

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const activeIndex = headerNav.findIndex((item) => item.path === pathname);

  // 处理header吸顶效果
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current?.classList.add('shrink');
      } else {
        headerRef.current?.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', shrinkHeader);

    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrap container">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <Link to="/">MyMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((item, index) => (
            <li key={index} className={index === activeIndex ? 'active' : ''}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// style && images
import './header.scss'
import Logo from '../../assets/tmovie.png'

const headerNav = [
  {
      display: 'Home',
      path: '/'
  },
  {
      display: 'Movies',
      path: '/movie'
  },
  {
      display: 'TV Series',
      path: '/tv'
  }
];

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  // 处理header吸顶效果

  return (
    <div className='header' ref={headerRef}>
      <div className="header__wrap container">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <Link to='/'>MyMovies</Link>
        </div>
        <ul className="header__nav">
          {
            headerNav.map((item, index)=> (
              <li key={index}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header
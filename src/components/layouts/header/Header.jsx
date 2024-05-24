import React from 'react';
import * as S from './style';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as images from '../../../assets/images/layout_images';

const logoMap = {
  '/promotion': images.promotionText,
  '/booth': images.boothText,
  '/boothsDetail': images.boothDetailText,
  '/notice': images.noticeText,
  '/noticeDetail': images.noticeDetailText,
  '/performance': images.timeTableText,
  '/about': images.developersText,
  '/': images.main,
};

const Header = ({ currentPath }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAbout = () => {
    return pathname == '/about' ? true : false;
  };

  let logoSrc = logoMap['/']; // 기본 로고

  if (currentPath.startsWith('/booth/')) {
    logoSrc = logoMap['/booth'];
  } else if (currentPath.startsWith('/booths/')) {
    logoSrc = logoMap['/boothsDetail'];
  } else if (currentPath.startsWith('/notice/')) {
    logoSrc = logoMap['/noticeDetail'];
  } else if (currentPath.startsWith('/performance')) {
    logoSrc = logoMap['/performance'];
  } else {
    logoSrc = logoMap[currentPath] || logoMap['/'];
  }

  return (
    <S.HeaderWrapper>
      {isAbout() ? (
        <Link to={-1}>
          <img src={logoSrc} alt="무아지경" />
        </Link>
      ) : (
        <img src={logoSrc} alt="무아지경" />
      )}
      <Link to={'about'}>
        <img src={images.lionImg} alt="🦁" />
      </Link>
    </S.HeaderWrapper>
  );
};

export default Header;

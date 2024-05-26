import React from "react";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import * as images from "../../../assets/images/layout_images";
import { handleCopyClipBoard } from "../../../utils/copyClipBoard";

const logoMap = {
  "/promotion": images.promotionText,
  "/booth": images.boothText,
  "/boothsDetail": images.boothDetailText,
  "/notice": images.noticeText,
  "/performance": images.timeTableText,
  "/about": images.developersText,
  "/": images.main,
};

const Header = ({ currentPath }) => {
  const navigate = useNavigate();
  const baseURL = "https://dgu-mua.site";

  const isDepthPage = () => {
    return currentPath.startsWith("/booths/") || currentPath === "/about";
  };

  const isBoothDetail = () => {
    return currentPath.startsWith("/booths/");
  };

  const handleClick = () => {
    if (isDepthPage()) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  let logoSrc = logoMap["/"]; // 기본 로고

  if (currentPath.startsWith("/booths/")) {
    logoSrc = logoMap["/boothsDetail"];
  } else if (currentPath.startsWith("/booth/")) {
    logoSrc = logoMap["/booth"];
  } else if (currentPath.startsWith("/performance/")) {
    logoSrc = logoMap["/performance"];
  } else {
    logoSrc = logoMap[currentPath] || logoMap["/"];
  }

  return (
    <S.HeaderWrapper className="header">
      <img src={logoSrc} alt="무아지경" onClick={handleClick} />
      {isBoothDetail() ? (
        <S.ShareImg
          src="/layout/header/share.png"
          onClick={() => handleCopyClipBoard(`${baseURL}${currentPath}`)}
        />
      ) : (
        <Link to="/about">
          <img src={images.lionImg} alt="🦁" />
        </Link>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;

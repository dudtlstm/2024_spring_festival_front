import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const logoMap = {
  "/promotion": "./layout/header/promotion.svg",
  "/booths": "./layout/header/booth.svg",
  "/boothsDetail": "./layout/header/boothDetail.svg",
  "/notice": "./layout/header/notice.svg",
  "/noticeDetail": "./layout/header/noticeDetail.svg",
  "/timeTable": "./layout/header/timeTable.svg",
  "/about": "./layout/header/developers.svg",
  "/": "./layout/logo.svg",
};

const Header = ({ currentPath }) => {
  let logoSrc = logoMap["/"]; // 기본 로고

  if (currentPath.startsWith("/booths/")) {
    logoSrc = logoMap["/boothsDetail"];
  } else if (currentPath.startsWith("/notice/")) {
    logoSrc = logoMap["/noticeDetail"];
  } else {
    logoSrc = logoMap[currentPath] || logoMap["/"];
  }

  return (
    <S.HeaderWrapper>
      {/* Header 문구 눌러도 이동 안 함 */}
      <img src={logoSrc} alt="무아지경" />

      <Link to={"about"}>
        <img src="./layout/lionImg.svg" alt="🦁" />
      </Link>
    </S.HeaderWrapper>
  );
};

export default Header;
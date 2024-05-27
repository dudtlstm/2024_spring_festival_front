import React, { useState } from "react";
import * as S from "./style";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as images from "../../../assets/images/layout_images";
import { handleCopyClipBoard } from "../../../utils/copyClipBoard";
import BoothShareModal from "../../common/modal/BoothShareModal";

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
  // 부스상세 페이지 공유버튼 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const navigate = useNavigate();
  const location = useLocation();
  // const baseURL = "http://localhost:5173";
  const baseURL = "https://dgu-mua.site";

  const isDepthPage = () => {
    return currentPath.startsWith("/booths/") || currentPath === "/about";
  };
  const isBoothDetail = () => {
    return currentPath.startsWith("/booths/");
  };

  const handleClick = () => {
    if (isDepthPage() && location.key !== "default") {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleShareClick = () => {
    handleCopyClipBoard(`${baseURL}${currentPath}`);
    setModalIsOpen(true);
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
    <>
      {modalIsOpen && (
        <BoothShareModal isOpen={modalIsOpen} onClose={closeModal} />
      )}
      <S.HeaderWrapper className="header">
        <img src={logoSrc} alt="무아지경" onClick={handleClick} />
        {isBoothDetail() ? (
          <S.ShareImg
            src="/layout/header/share.png"
            onClick={handleShareClick}
          />
        ) : (
          <Link to="/about">
            <img src={images.lionImg} alt="🦁" />
          </Link>
        )}
      </S.HeaderWrapper>
    </>
  );
};

export default Header;

import React from "react";
import * as S from "./style";
import * as images from "../../../assets/images/layout_images";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Copyright>
        <S.LIKELIONDGU>
          동국대학교 멋쟁이사자처럼
          <br />
          @LIKELION DGU. All rights Reserved.
        </S.LIKELIONDGU>
        <S.DesignSupport>@Design supported by 축제기획단</S.DesignSupport>
      </S.Copyright>
      
      <S.ContectContainer>
        <S.IconContainer>
          <a href="https://github.com/LikeLion-at-DGU" target="_blank" rel="noopener noreferrer">
            <img src={images.github} alt="github" />
            <span>Github</span>
          </a>
        </S.IconContainer>
        <S.VerticalLine />
        <S.IconContainer>
          <a href="/about" rel="noopener noreferrer">
            <img src={images.footerlionImg} alt="developers" />
            <span>Developers</span>
          </a>
        </S.IconContainer>
        <S.VerticalLine />
        <S.IconContainer>
          <a href="https://www.instagram.com/likelion_dongguk/" target="_blank" rel="noopener noreferrer">
            <img src={images.instagram} alt="instagram" />
            <span>Instagram</span>
          </a>
        </S.IconContainer>
      </S.ContectContainer>
    </S.FooterWrapper>
  );
};

export default Footer;

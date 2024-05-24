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
            <img src={images.github} alt="github" />
            <a href="https://github.com/LikeLion-at-DGU" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </S.IconContainer>
          <S.VerticalLine />
          <S.IconContainer>
            <img src={images.footerlionImg} alt="developers" />
            <a href="/about" target="_blank" rel="noopener noreferrer">
              Developers
            </a>
          </S.IconContainer>
          <S.VerticalLine />
          <S.IconContainer>
            <img src={images.instagram} alt="instagram" />
            <a href="https://www.instagram.com/likelion_dongguk/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </S.IconContainer>
      </S.ContectContainer>
    </S.FooterWrapper>
  );
};

export default Footer;

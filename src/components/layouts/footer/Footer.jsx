import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import * as images from "../../../assets/images/layout_images";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Copyright>
        동국대학교 멋쟁이사자처럼
        <br />
        @DGU LikeLion. All rights Reserved.
        <S.DesignSupport>@Design supported by 축제기획단</S.DesignSupport>
      </S.Copyright>
      <S.ContectContainer>
        <S.IconContainer>
          <img src={images.footerlionImg} alt="developers" />
          <Link to="/about">Developers</Link>
        </S.IconContainer>
        <S.IconContainer>
          <img src={images.github} alt="github" />
          <Link to="https://github.com/LikeLion-at-DGU">Github</Link>
        </S.IconContainer>
        <S.IconContainer>
          <img src={images.instagram} alt="instagram" />
          <Link to="https://www.instagram.com/likelion_dongguk/">
            Instagram
          </Link>
        </S.IconContainer>
      </S.ContectContainer>
    </S.FooterWrapper>
  );
};

export default Footer;

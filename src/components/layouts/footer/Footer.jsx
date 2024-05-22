import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Copyright>
        동국대학교 멋쟁이사자처럼
        <br />
        @DGU Likelion. All rights Reserved.
        <S.DesignSupport>@Design supported by 축제기획단</S.DesignSupport>
      </S.Copyright>
      <S.ContectContainer>
        <S.IconContainer>
          <img src="./layout/footer/developers.svg" alt="developers" />
          <Link to={"./about"}>Developers</Link>
        </S.IconContainer>
        <S.IconContainer>
          <img src="./layout/footer/github.svg" alt="developers" />
          <Link to={"https://github.com/LikeLion-at-DGU"}>Github</Link>
        </S.IconContainer>
        <S.IconContainer>
          <img src="./layout/footer/instagram.svg" alt="developers" />
          <Link to={"https://www.instagram.com/likelion_dongguk/"}>
            Instagram
          </Link>
        </S.IconContainer>
      </S.ContectContainer>
    </S.FooterWrapper>
  );
};

export default Footer;

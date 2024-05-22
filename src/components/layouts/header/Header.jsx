import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.HeaderWrapper>
        {/* Header 문구 눌러도 이동 안 함 */}
        <img src="./layout/logo.svg" alt="무아지경" />

      <Link to={"about"}>
        <img src="./layout/lionImg.svg" alt="🦁" />
      </Link>
    </S.HeaderWrapper>
  );
};

export default Header;

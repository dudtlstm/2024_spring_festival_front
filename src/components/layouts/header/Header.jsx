import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Link to={"/"}>
        <div>logo</div>
      </Link>
      <Link to={"about"}>
        <div>🦁</div>
      </Link>
    </S.HeaderWrapper>
  );
};

export default Header;

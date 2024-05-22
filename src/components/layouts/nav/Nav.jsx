import React from "react";
import * as S from "./style";
import { Link, useLocation } from "react-router-dom";
import { currentDate } from "../../../utils/currentDate";
import * as images from "../../../assets/images/layout_images";

const Nav = () => {
  const location = useLocation().pathname;

  const route_map = [
    {
      id: 1,
      name: "공지",
      route: "/notice",
      c_img: images.c_notice,
      img: images.notice,
    },
    {
      id: 2,
      name: "부스",
      route: `/booths/${currentDate()}`,
      c_img: images.c_booth,
      img: images.booth,
    },
    {
      id: 3,
      name: "홈",
      route: "/",
      c_img: images.c_home,
      img: images.home,
    },
    {
      id: 4,
      name: "공연",
      route: `/performance/${currentDate()}`,
      c_img: images.c_performance,
      img: images.performance,
    },
    {
      id: 5,
      name: "홍보",
      route: "/promotion",
      c_img: images.c_promotion,
      img: images.promotion,
    },
  ];

  const isCurrentPage = (route) => {
    // console.log("loca : ", location, "route: ", route);
    if (location == route) return true;
    else return false;
  };

  return (
    <S.NavWrapper>
      {route_map.map((page) => (
        <Link to={page.route} key={page.id}>
          <S.NavContainer
            fontcolor={isCurrentPage(page.route) ? "#F7634E" : "#929292"}
          >
            <img
              src={isCurrentPage(page.route) ? page.c_img : page.img}
              alt={page.name}
            />
            <div>{page.name}</div>
          </S.NavContainer>
        </Link>
      ))}
    </S.NavWrapper>
  );
};

export default Nav;

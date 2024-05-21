import React from "react";
import * as S from "./style";
import Playlist from "./Playlist";

const Lineup = () => {
  // API - linup & playlist update
  const lineup = [
    { id: 1, artist: "데이식스", image: "./timeTable/데이식스.png" },
    { id: 2, artist: "잔나비", image: "./timeTable/잔나비.png" },
    { id: 3, artist: "10cm", image: "./timeTable/10cm.png" },
  ];

  return (
    <>
      <S.LineupWrapper>
        <S.LineupTitle>라인업</S.LineupTitle>
        <S.LineupBanner>
          {lineup.map((lineup) => (
            <S.LineupLabel key={lineup.id}>
              <S.LineupBannerImg src={lineup.image} alt={lineup.artist} />
              <S.LineupSinger>{lineup.artist}</S.LineupSinger>
            </S.LineupLabel>
          ))}
        </S.LineupBanner>
        <Playlist />
      </S.LineupWrapper>
      <S.Line />
    </>
  );
};

export default Lineup;

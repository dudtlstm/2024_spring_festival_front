import React from "react";
import * as S from "./style";

const Lineup = () => {
  // API - linup & playlist update
  const lineup = [
    { name: "데이식스", img: "./timeTable/데이식스.png" },
    { name: "잔나비", img: "./timeTable/잔나비.png" },
    { name: "10cm", img: "./timeTable/10cm.png" },
  ];
  const playlist = [
    {
      singer: "데이식스",
      music_img: "",
      music_title: "Welcome to the show",
      link: "",
    },
    {
      singer: "데이식스",
      music_img: "",
      music_title: "Love Me or Leave Me",
      link: "",
    },
    { singer: "데이식스", music_img: "", music_title: "예뻤어", link: "" },
  ];

  return (
    <>
      <S.LineupWrapper>
        <S.LineupTitle>라인업</S.LineupTitle>
        <S.LineupBanner>
          {lineup.map((lineup) => (
            <S.LineupLabel>
              <S.LineupBannerImg src={lineup.img} alt={lineup.name} />
              <S.LineupSinger>{lineup.name}</S.LineupSinger>
            </S.LineupLabel>
          ))}
        </S.LineupBanner>
        <S.PlaylistWrapper>
          <S.PlaylistGuide>
            공연을 100%로 즐기기 위해, <br />
            <S.GuideBold>{playlist[0].singer}</S.GuideBold>의 노래를 들어보세요!
          </S.PlaylistGuide>
          <S.Playlist>
            {playlist.map((music) => (
              <S.Music>
                <S.PlaylistImg src={music.music_img} alt={music.music_title} />
                <S.PlaylistTitle>{music.music_title}</S.PlaylistTitle>
                <S.PlaylistLink href={music.link}>
                  <img src="./timeTable/play.svg" alt="▶︎" />
                </S.PlaylistLink>
              </S.Music>
            ))}
          </S.Playlist>
        </S.PlaylistWrapper>
      </S.LineupWrapper>
      <S.Line />
    </>
  );
};

export default Lineup;

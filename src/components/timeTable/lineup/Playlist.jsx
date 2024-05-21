import React from "react";
import * as S from "./style";

const Playlist = () => {
  const playlist = [
    {
      id: 1,
      artist: "데이식스",
      image: "",
      title: "Welcome to the show",
      ytb_URL: "",
    },
    {
      id: 2,
      artist: "데이식스",
      image: "",
      title: "Love Me or Leave Me",
      ytb_URL: "",
    },
    {
      id: 3,
      artist: "데이식스",
      image: "",
      title: "예뻤어",
      ytb_URL: "",
    },
  ];

  return (
    <S.PlaylistWrapper>
      <S.PlaylistGuide>
        공연을 100%로 즐기기 위해, <br />
        <S.GuideBold>{playlist[0].artist}</S.GuideBold>의 노래를 들어보세요!
      </S.PlaylistGuide>
      <S.Playlist>
        {playlist.map((music) => (
          <S.Music key={music.id}>
            <S.PlaylistImg src={music.image} alt={music.title} />
            <S.PlaylistTitle>{music.title}</S.PlaylistTitle>
            <S.PlaylistLink href={music.ytb_URL}>
              <img src="./timeTable/play.svg" alt="▶︎" />
            </S.PlaylistLink>
          </S.Music>
        ))}
      </S.Playlist>
    </S.PlaylistWrapper>
  );
};

export default Playlist;

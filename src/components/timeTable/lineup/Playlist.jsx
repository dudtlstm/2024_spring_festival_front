import React, { useEffect, useState } from "react";
import * as S from "./style";
import { fetchPlaylists } from "../../../apis/api/lineup";

const Playlist = ({ artist_id }) => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchPlaylist = await fetchPlaylists(artist_id);
      setPlaylist(fetchPlaylist);
    };

    fetchData();
  }, [artist_id]);
  // console.log();
  return (
    <S.PlaylistWrapper>
      <S.PlaylistGuide>
        공연을 100%로 즐기기 위해, <br />
        <S.GuideBold>{playlist.name}</S.GuideBold>의 노래를 들어보세요!
      </S.PlaylistGuide>
      <S.Playlist>
        {playlist.musics &&
          playlist.musics.map((music) => (
            <S.Music key={music.id}>
              <S.PlaylistImg src={music.album} alt={music.title} />
              <S.PlaylistTitle>{music.title}</S.PlaylistTitle>
              <S.PlaylistLink href={music.ytb_url}>
                <img src="./timeTable/play.svg" alt="▶︎" />
              </S.PlaylistLink>
            </S.Music>
          ))}
      </S.Playlist>
    </S.PlaylistWrapper>
  );
};

export default Playlist;

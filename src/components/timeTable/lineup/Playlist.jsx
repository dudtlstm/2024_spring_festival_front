import React, { useEffect, useState } from "react";
import * as S from "./style";
import { fetchPlaylists } from "../../../apis/api/lineup";
import { playBtn } from "../../../assets/images/performance_images";
import Spinner from "../../common/Spinner";

const Playlist = ({ artist_id }) => {
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchPlaylist = await fetchPlaylists(artist_id);
      setPlaylist(fetchPlaylist);

      setLoading(false);
    };

    fetchData();
  }, [artist_id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <S.PlaylistWrapper>
          <S.PlaylistGuide>
            공연을 100%로 즐기기 위해, <br />
            <S.GuideBold>{playlist.name}</S.GuideBold>의 노래를 들어보세요!
          </S.PlaylistGuide>
          <S.Playlist>
            {playlist.musics &&
              playlist.musics.map((music) => (
                <S.Music key={music.id} href={music.ytb_url} target="blank">
                  <S.PlaylistImg src={music.album} alt={music.title} />
                  <S.PlaylistTitle>
                    {music.title.length > 20
                      ? music.title.slice(0, 19) + " ..."
                      : music.title}
                  </S.PlaylistTitle>
                  <S.PlaylistLink src={playBtn} alt="▶︎" />
                </S.Music>
              ))}
          </S.Playlist>
        </S.PlaylistWrapper>
      )}
    </>
  );
};

export default Playlist;

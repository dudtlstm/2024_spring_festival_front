import React, { useEffect, useState } from "react";
import * as S from "./style";
import Playlist from "./Playlist";
import { fetchArtists } from "../../../apis/api/lineup";
import Spinner from "../../common/Spinner";

const Lineup = ({ date }) => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [focus_id, setFocus_id] = useState(null); // 가수의 id

  useEffect(() => {
    const fetchData = async () => {
      const fetchArtist = await fetchArtists(date);
      setArtists(fetchArtist);
      setFocus_id(fetchArtist[0]?.id);

      setLoading(false);
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    setFocus_id(id);
    // console.log(id);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <S.LineupWrapper>
            <S.LineupTitle>라인업</S.LineupTitle>
            <S.LineupBanner>
              {artists.map((artist) => (
                <S.LineupLabel
                  key={artist.id}
                  artist_id={artist.id}
                  focus_id={focus_id}
                  onClick={() => handleClick(artist.id)}
                >
                  <S.LineupBannerImg
                    src={artist.images[1]}
                    alt={artist.artist}
                  />
                  <S.LineupSinger>{artist.name}</S.LineupSinger>
                </S.LineupLabel>
              ))}
            </S.LineupBanner>
            <Playlist artist_id={focus_id} />
          </S.LineupWrapper>
          <S.Line />
        </>
      )}
    </>
  );
};

export default Lineup;

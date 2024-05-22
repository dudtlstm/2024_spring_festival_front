import React, { useEffect, useState } from "react";
import * as S from "./style";
import Playlist from "./Playlist";
import { fetchArtists } from "../../../apis/api/lineup";

const Lineup = ({ date }) => {
  // const [festaDate, setFestaDate] = useState(date); // 축제 당일 날짜
  const [festaDate, setFestaDate] = useState(22); // 개발 단계 임의 날짜
  const [artists, setArtists] = useState([]);
  const [focus_id, setFocus_id] = useState(1); // 가수의 id

  useEffect(() => {
    const fetchData = async () => {
      const fetchArtist = await fetchArtists(festaDate);
      setArtists(fetchArtist);
    };

    fetchData();
  }, []);
  const handleClick = (id) => {
    setFocus_id(id);
    // console.log(id);
  };

  return (
    <>
      <S.LineupWrapper>
        <S.LineupTitle>라인업</S.LineupTitle>
        <S.LineupBanner>
          {artists.slice(0, 3).map((artist) => (
            // {artists.map((artist) => ( // 백엔드 날짜별 api 수정시 이걸로!
            <S.LineupLabel
              key={artist.id}
              artist_id={artist.id}
              focus_id={focus_id}
              onClick={() => handleClick(artist.id)}
            >
              <S.LineupBannerImg src={artist.images[0]} alt={artist.artist} />
              <S.LineupSinger>{artist.name}</S.LineupSinger>
            </S.LineupLabel>
          ))}
        </S.LineupBanner>
        <Playlist artist_id={focus_id} />
      </S.LineupWrapper>
      <S.Line />
    </>
  );
};

export default Lineup;

import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Playlist from "./Playlist";
import { fetchArtists } from "../../../apis/api/lineup";

const Lineup = ({ date }) => {
  const [festaDate, setFestaDate] = useState(date);
  const [artists, setArtists] = useState([]);
  const [focus_id, setFocus_id] = useState(null); // 가수의 id

  useEffect(() => {
    const fetchData = async () => {
      const fetchArtist = await fetchArtists(festaDate);
      setArtists(fetchArtist);
      setFocus_id(fetchArtist[0]?.id);
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    setFocus_id(id);
    // console.log(id);
  };

  // 배너 슬라이드 이벤트
  const lineupBannerRef = useRef(null);
  const startXRef = useRef(0);

  useEffect(() => {
    const handleMouseDown = (e) => {
      startXRef.current = e.pageX;
      // lineupBannerRef.current.addEventListener("touchstart", handleMouseMove);
      lineupBannerRef.current.addEventListener("mousemove", handleMouseMove);
      // lineupBannerRef.current.addEventListener("touchend", handleMouseUp);
    };

    const handleMouseMove = (e) => {
      const x = e.pageX;
      const walk = x - startXRef.current;

      if (Math.abs(walk) > 50) {
        const currentIndex = artists.findIndex(
          (artist) => artist.id === focus_id
        );
        if (walk > 0) {
          // 오른쪽 슬라이드
          const nextIndex = (currentIndex + 1) % artists.length;
          setFocus_id(artists[nextIndex].id);
        } else {
          // 왼쪽 슬라이드
          const prevIndex =
            (currentIndex - 1 + artists.length) % artists.length;
          setFocus_id(artists[prevIndex].id);
        }
        startXRef.current = x;
      }
    };

    const lineupBanner = lineupBannerRef.current;
    lineupBanner.addEventListener("mousedown", handleMouseDown);

    return () => {
      lineupBanner.removeEventListener("mousedown", handleMouseDown);
    };
  }, [artists, focus_id]);

  return (
    <>
      <S.LineupWrapper>
        <S.LineupTitle>라인업</S.LineupTitle>
        <S.LineupBanner ref={lineupBannerRef}>
          {artists.map((artist) => (
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

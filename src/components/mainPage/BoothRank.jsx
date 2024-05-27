import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style/style";
import TitleComponent from "./Title";
import BoothRankCard from "./BoothRankCard";
import { getTopBooth } from "../../apis/api/getTopBooth";
import Spinner from "../common/Spinner";

const BoothRank = () => {
  const [top3Booths, setTop3Booths] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const today = new Date();
  let formattedDate = today.getDate();

  // // 날짜가 28, 29, 30이 아닌 경우 28일로 설정
  // if (formattedDate !== 28 && formattedDate !== 29 && formattedDate !== 30) {
  //   formattedDate = 28;
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (
          formattedDate === 28 ||
          formattedDate === 29 ||
          formattedDate === 30
        ) {
          data = await getTopBooth(formattedDate);
        } else {
          const data28 = await getTopBooth(28);
          const data29 = await getTopBooth(29);
          const data30 = await getTopBooth(30);
          data = [...data28, ...data29, ...data30];

          const boothMap = new Map();
          data.forEach((booth) => {
            if (!boothMap.has(booth.id)) {
              boothMap.set(booth.id, booth);
            }
          });
          data = Array.from(boothMap.values())
            .sort((a, b) => b.like_cnt - a.like_cnt)
            .slice(0, 3);
        }
        setTop3Booths(data);
        console.log("main: ", data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [formattedDate]);

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  const truncateDescript = (descript, maxLength) => {
    return descript.length > maxLength
      ? `${descript.slice(0, maxLength)}...`
      : descript;
  };

  const handleCardClick = (id) => {
    // navigate(`/booths/${date}/${id}`); // date 포함하여 api 요청
    // date 값 반환되면 위의 코드 주석 풀기

    navigate(`/booth/28`); //임시로 부스 페이지로 이동하게 함
  };

  return (
    <S.BoothRankWrapper>
      <TitleComponent title={"부스 랭킹"} to={"/booth/28"} />
      {loading ? (
        <Spinner />
      ) : (
        <S.BoothRankBg>
          {top3Booths.map((booth, index) => (
            <BoothRankCard
              key={index}
              thumImg={booth.thumbnail || "/image/common/default.png"}
              title={truncateTitle(booth.name, 8)}
              heartNum={booth.like_cnt}
              descript={truncateDescript(booth.description, 20)}
              src={
                index === 0
                  ? "/image/mainpage/num_1.png"
                  : index === 1
                  ? "/image/mainpage/num_2.png"
                  : "/image/mainpage/num_3.png"
              }
              onClick={() => handleCardClick(booth.id)}
            />
          ))}
        </S.BoothRankBg>
      )}
    </S.BoothRankWrapper>
  );
};

export default BoothRank;

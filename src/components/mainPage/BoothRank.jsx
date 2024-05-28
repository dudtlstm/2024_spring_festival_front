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
  if (formattedDate !== 28 && formattedDate !== 29 && formattedDate !== 30) {
    formattedDate = 28;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopBooth(formattedDate);
        // console.log("Fetched Booth Data:", data);
        setTop3Booths(data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const getFormattedDate = (during) => {
  //   if (during.includes("화")) {
  //     return 28;
  //   } else if (during.includes("수")) {
  //     return 29;
  //   } else if (during.includes("목")) {
  //     return 30;
  //   }
  //   return 28;
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //      const data = await getTopBooth(formattedDate);
  //       // console.log("Fetched Booth Data:", data);
  //       setTop3Booths(data);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const getFormattedDate = (during) => {
  //   if (during.includes("화")) {
  //     return 28;
  //   } else if (during.includes("수")) {
  //     return 29;
  //   } else if (during.includes("목")) {
  //     return 30;
  //   }
  //   return 28;
  // };

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  const truncateDescript = (descript, maxLength) => {
    return descript.length > maxLength
      ? `${descript.slice(0, maxLength)}...`
      : descript;
  };

  const handleCardClick = (id) => {
    navigate(`/booths/${formattedDate}/${id}`);
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
              onClick={() => handleCardClick(booth.id, booth.during)}
            />
          ))}
        </S.BoothRankBg>
      )}
    </S.BoothRankWrapper>
  );
};

export default BoothRank;

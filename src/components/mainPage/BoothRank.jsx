import React, { useEffect, useState } from "react";
import * as S from "./style/style";
import TitleComponent from "./Title";
import BoothRankCard from "./BoothRankCard";
import { getTopBooth } from "../../apis/api/getTopBooth";

const BoothRank = () => {
  const [top3Booths, setTop3Booths] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const formattedDate = today.getDate();
      const data = await getTopBooth(formattedDate);
      setTop3Booths(data);
    };

    fetchData();
  }, []);

  return (
    <S.BoothRankWrapper>
      <TitleComponent title={"부스 랭킹"} to={"/booths"} />
      <S.BoothRankBg>
        {top3Booths.map((booth, index) => (
          <BoothRankCard
            key={index}
            thumImg={booth.thumbnail}
            title={booth.name}
            heartNum={booth.like_cnt}
            descript={booth.description}
            src={
              index === 0
                ? "/image/mainpage/num_1.png"
                : index === 1
                ? "/image/mainpage/num_2.png"
                : "/image/mainpage/num_3.png"
            }
            to={`/booth/${booth.id}`}
          />
        ))}
      </S.BoothRankBg>
    </S.BoothRankWrapper>
  );
};

export default BoothRank;

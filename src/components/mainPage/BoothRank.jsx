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
      //api 테스트 위한 코드로 실제로는 formattedDate -1 이 아닌 formattedDate로 해야 함
      const data = await getTopBooth(formattedDate - 1);
      setTop3Booths(data);
    };

    fetchData();
  }, []);

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  const truncateDescript = (descript, maxLength) => {
    return descript.length > maxLength
      ? `${descript.slice(0, maxLength)}...`
      : descript;
  };

  return (
    <S.BoothRankWrapper>
      <TitleComponent title={"부스 랭킹"} to={"/booths"} />
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
            to={`/booth/${booth.id}`}
          />
        ))}
      </S.BoothRankBg>
    </S.BoothRankWrapper>
  );
};

export default BoothRank;

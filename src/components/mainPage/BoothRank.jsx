import React from "react";
import * as S from "./style";
import TitleComponent from "./Title";
import BoothRankCard from "./BoothRankCard";

const BoothRank = () => {
  return (
    <S.BoothRankWrapper>
      <TitleComponent title={"부스 랭킹"} to={"/booths"} />
      <S.BoothRankBg>
        {/* api 확인 후 코드 수정 필요 */}
        <BoothRankCard
          title={"멋쟁이사자처럼"}
          heartNum={80}
          descript="뽕빵뽕멋쟁이 사자들이 모인 쌈@빡한 주점버블버블버버를 버블버블버버"
          src="/image/mainpage/num_1.png"
        />
        <BoothRankCard
          title={"멋쟁이사자처럼"}
          heartNum={80}
          descript="뽕빵뽕멋쟁이 사자들이 모인 쌈@빡한 주점버블버블버버를 버블버블버버"
          src="/image/mainpage/num_2.png"
        />
        <BoothRankCard
          title={"멋쟁이사자처럼"}
          heartNum={80}
          descript="뽕빵뽕멋쟁이 사자들이 모인 쌈@빡한 주점버블버블버버를 버블버블버버"
          src="/image/mainpage/num_3.png"
        />
      </S.BoothRankBg>
    </S.BoothRankWrapper>
  );
};

export default BoothRank;

import React, { useState, useEffect } from "react";
import * as S from "./style";
// import Spinner from "../common/Spinner";

function AboutPage() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
    {/* {loading ? (
      <Spinner /> */}
      <S.AboutWrapper>
        <S.FirstWrapper src={"/developers/12thSlogan.png"} alt="12기 슬로건" loading="lazy" decoding="async"/>
        <S.SecondWrapper>
          <S.SecondMainWrapper>
            <S.SecondTitle>개발자 정보</S.SecondTitle>
            <S.Logo src={"/developers/dgulogo.png"} alt="동대 멋사 로고" loading="lazy" decoding="async"/>
            <S.SecondClubTitle>동국대학교 멋쟁이사자처럼</S.SecondClubTitle>
          </S.SecondMainWrapper>
          <a
            href="https://likelion-dgu.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.MoveToSite>
              <S.LinkImg src="./developers/link.png" alt="동멋 사이트 링크" loading="lazy" decoding="async"/>
              <div>동대멋사 사이트</div>
            </S.MoveToSite>
          </a>
        </S.SecondWrapper>
        <S.ThirdWrapper>
          <S.Leads>
            <S.LeadInfoTitle>Team Lead</S.LeadInfoTitle>
              <S.HereLeads src={"/developers/people/lead.png"} alt="리드" loading="lazy" decoding="async"/>
          </S.Leads>
          <S.Members>
            <S.MemberInfoTitle>Team Member</S.MemberInfoTitle>
              <S.HereMembers src={"/developers/people/member.png"} alt="멤버" loading="lazy" decoding="async"/>
          </S.Members>
        </S.ThirdWrapper>
        <S.LastWrapper>
          <S.LastInfo>사이트 경험은 어떠셨나요? 후기를 남겨주세요</S.LastInfo>
          <a
            href="https://forms.gle/BvbusGMWPqYiFDfu5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.MoveToForm>
              <S.MoveImg src={"/developers/thumb.png"} alt="후기 남기기" loading="lazy" decoding="async"/>
              <S.MoveToFormInfo>후기 남기기</S.MoveToFormInfo>
            </S.MoveToForm>
          </a>
        </S.LastWrapper>
      </S.AboutWrapper>
    </>
  );
}

export default AboutPage;

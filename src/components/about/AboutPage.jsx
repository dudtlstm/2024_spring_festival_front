import React, { useState, useEffect } from 'react';
import * as S from './style';


function AboutPage() {

    return (

        <S.AboutWrapper>
            <S.FirstWrapper src={"/developers/12thSlogan.svg"} alt="12기 슬로건" />
            <S.SecondWrapper>
                <S.SecondMainWrapper>
                    <S.SecondTitle>
                        개발자 정보
                    </S.SecondTitle>
                    <S.Logo src={"/developers/dgulogo.svg"} alt="동대 멋사 로고" />
                    <S.SecondClubTitle>
                        동국대학교 멋쟁이사자처럼
                    </S.SecondClubTitle>
                </S.SecondMainWrapper>
                <a href="https://likelion-dgu.com/" target="_blank" rel="noopener noreferrer">
                    <S.MoveToSite>
                        <img src="./developers/link.svg" alt="동멋 사이트 링크" />
                        <div>동대멋사 사이트</div>
                    </S.MoveToSite>
                </a>
            </S.SecondWrapper>
            <S.ThirdWrapper>
                <S.Leads>
                    <S.LeadInfoTitle>
                        Team Lead
                    </S.LeadInfoTitle>
                    <S.LeadInfoCard>
                        <S.HyeonA src={"/developers/people/HA.svg"} alt="설현아" />
                        <S.RestLeads>
                            <S.JW src={"/developers/people/JW.svg"} alt="이주원" />
                            <S.YJ src={"/developers/people/YJ.svg"} alt="이유진" />
                            <S.JB src={"/developers/people/JB.svg"} alt="이종범" />
                            <S.MK src={"/developers/people/MK.svg"} alt="김민경" />
                        </S.RestLeads>
                    </S.LeadInfoCard>
                </S.Leads>
                <S.Member>
                    <S.MemberInfoTitle>
                        Team Member
                    </S.MemberInfoTitle>
                    <S.MemberInfoCard>
                        <img src="./developers/people/SH.svg" alt="심서현" />
                        <img src="./developers/people/HJ.svg" alt="윤혜정" />
                        <img src="./developers/people/YS.svg" alt="김윤서" />
                        <img src="./developers/people/dudtlstm.svg" alt="박영신" />
                        <img src="./developers/people/coldweek.svg" alt="오찬주" />
                        <img src="./developers/people/HY.svg" alt="박호연" />
                        <img src="./developers/people/mat.svg" alt="이상준" />
                        <img src="./developers/people/eunho.svg" alt="차은호" />
                    </S.MemberInfoCard>
                </S.Member>
            </S.ThirdWrapper>
            <S.LastWrapper>
                <S.LastInfo>
                    사이트 경험은 어떠셨나요? 후기를 남겨주세요
                </S.LastInfo>
                <a href="https://www.instagram.com/dudtlstm/" target="_blank" rel="noopener noreferrer">
                    <S.MoveToForm>
                        <S.MoveImg src={"/developers/formthumb.svg"} alt="후기 남기기" />
                        <S.MoveToFormInfo>
                            후기 남기기
                        </S.MoveToFormInfo>
                    </S.MoveToForm>
                </a>
            </S.LastWrapper>
        </S.AboutWrapper>
        
        
    );
}

export default AboutPage;
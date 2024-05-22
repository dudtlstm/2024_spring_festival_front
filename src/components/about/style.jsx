import { styled } from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  padding-top: 12px;
  flex-direction: column;
  align-items: center;
  gap: 69px;
  padding-bottom: 70px;
`;

export const FirstWrapper = styled.img`
  width: 100%;
  height: 221.072px;
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const SecondMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const SecondTitle = styled.div`
  color: var(--use-font-font---head, #151515);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.48px;
`;

export const Logo = styled.img`
  height: 48.902px;
`;

export const SecondClubTitle = styled.div`
  color: var(--use-font-font---body, #474747);
  text-align: center;

  /* Body2 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.25px;
`;

export const MoveToSite = styled.div`
  color: #929292;

  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */

  display: flex;
  gap: 4px;

  align-items: flex-start;
`;

export const ThirdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
`;

export const Leads = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const LeadInfoTitle = styled.div`
  color: var(--use-font-font---head, #151515);
  text-align: center;

  /* Body2 - bold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.5px;
`;

export const LeadInfoCard = styled.div`
  width: 100%;
  height: 564px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const HyeonA = styled.img`
    align-self: center;
    width: 60%;
`;

export const RestLeads = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const JW = styled.img`
  grid-area: 1 / 1;
`;

export const YJ = styled.img`
  grid-area: 1 / 2;
`;

export const JB = styled.img`
  grid-area: 2 / 1;
`;

export const MK = styled.img`
  grid-area: 2 / 2;
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const MemberInfoTitle = styled.div`
  color: var(--use-font-font---head, #151515);
  text-align: center;

  /* Body2 - bold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.5px;
`;

export const MemberInfoCard = styled.div`
  width: 282px;
  height: 758px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const LastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const LastInfo = styled.div`
  color: var(--use-font-font---info, #929292);
  text-align: center;

  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;

export const MoveToForm = styled.div`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  border: 1px solid var(--use-stroke-stroke---main, #c9cad3);
  background: var(--use-background-background---main, #fff);

  /* 헤더 그림자 */
  box-shadow: 0px 2px 4px 0px #e2e6ef;
`;

export const MoveImg = styled.img`
  width: 18.06px;
  height: 17.501px;
`;

export const MoveToFormInfo = styled.div`
  color: var(--use-font-font---info, #929292);
  text-align: center;

  /* Button1 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.25px;
`;

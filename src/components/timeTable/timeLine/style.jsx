import styled from "styled-components";

export const TimeLineWrapper = styled.div`
  display: flex;
  padding: 24px 20px 28px 20px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;
export const TimeLineTitle = styled.div`
  display: flex;
  padding: 8px 4px 12px 4px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  color: var(--use-font-font---head, #151515);

  /* Head2 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;
`;
export const RealtimeMove = styled.div`
  display: flex;
  padding: 16px 0px;
  margin: 8px 0px 16px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: var(--main-red-100, #fa9487);

  color: var(--use-font-font---white, #fff);

  /* Button1 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.25px;
`;
export const TimeGrid = styled.div`
  position: relative;

  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 4fr;
  gap: 1px;
`;
export const RealtimeLine = styled.img`
  position: absolute;
  width: 100%;
  top: 500px;
  /* z-index: 50; */
`;
export const RealTimeBar = styled.img`
  display: ${(props) => props.top == null && "none"};
  grid-column: 2/4;
  width: 100%;

  position: absolute;
  top: ${(props) => props.top && props.top * 2.4 + 46}px;

  /* z-index: 15; */
`;
export const TimeSlot = styled.div`
  position: relative;

  height: 72px; /* 1분당 2.4px */
  display: flex;
  justify-content: center;
  padding: 4px 0px;

  color: var(--use-font-font---info, #929292);

  /* Caption */
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 120% */

  border-top: 1px solid #e2e3ec;
`;

export const EmptySlot = styled.div`
  position: relative;

  height: 72px; /* 1분당 2.4px */
  border-top: 1px solid #e2e3ec;
`;
export const PlaceWrapper = styled.div`
  position: relative;
`;
export const PerformancePlace = styled.div`
  height: 48px;

  display: flex;
  padding: 12px;
  align-items: center;

  color: var(--use-font-font---info, #474747);
  /* color: var(--use-font-font---info, #929292); */
  text-align: center;

  /* Head3 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
`;

// PerformanceCard.jsx

export const PerformanceCardWrapper = styled.div`
  position: absolute;
  width: 97%;
  height: ${(props) => props.timeslots * 64 + 8 * (props.timeslots - 1)}px;
  display: flex;

  padding: 12px 16px;
  margin: 0px 8px 8px 0px;

  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;

  border-left: 3px solid
    ${(props) => (props.bordercolor == "now" ? "#FA9487" : "#E2E3EC")};
  background: ${(props) =>
    props.bgcolor == "now" ? "rgba(250, 148, 135, 0.20)" : "#FBFBFB"};

  /* z-index: 10; */
`;
export const PerformanceTeam = styled.div`
  color: var(--use-font-font---body, #474747);

  /* Head3 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;

  @media (max-width: 385px) {
    font-size: 14px;
  }
`;
export const PerformanceTime = styled.div`
  color: var(--use-font-font---info, #929292);

  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */

  @media (max-width: 385px) {
    font-size: 10px;
  }
`;

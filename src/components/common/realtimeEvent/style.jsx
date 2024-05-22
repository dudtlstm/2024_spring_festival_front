import { styled } from "styled-components";

export const Wrapper = styled.div`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  display: flex;
  padding: 4px 0px 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;
export const RealtimeEventWrapper = styled.div`
  width: 100vw;
  max-width: 430px;
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: var(--use-background-background---section, #fbfbfb);
`;
export const RealtimeTxt = styled.div`
  color: var(--use-font-font---body, #474747);

  /* Body2 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.25px;
`;
export const RealtimeBold = styled.span`
  color: var(--main-red-900, #f7634e);
`;

import { styled, keyframes } from "styled-components";

const slideUpAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(20px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const Wrapper = styled.div`
  margin-top: ${(props) => props.$marginTop || "0px"};
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
  padding: 16px 30px;
  background: var(--use-background-background---section, #fbfbfb);
  display: flex;
  align-items: center;
  gap: 5px;
  align-self: stretch;
`;
export const RealtimeTxt = styled.div`
  display: flex;
  width: 100%;
  animation: ${(props) => props.isseveral > 1 && slideUpAnimation} 3s
    ease-in-out infinite;
  color: var(--use-font-font---body, #474747);

  /* Body2 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.25px;

  @media (max-width: 385px) {
    font-size: 14px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
`;
export const Loudspeaker = styled.img`
  margin-right: 10px;
`;
export const TextWrapper = styled.div`
  margin: auto;
`;
export const RealtimeBold = styled.span`
  color: var(--main-red-900, #f7634e);
`;

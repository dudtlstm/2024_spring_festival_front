import { styled } from "styled-components";

export const LineupWrapper = styled.div`
  width: 100%;
  padding: 0px 20px 32px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

export const LineupTitle = styled.div`
  /* height: 24px; */
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
export const LineupBanner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  align-self: stretch;
`;
export const LineupLabel = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  position: relative;

  transition: width 0.3s ease, transform 0.3s ease;

  img {
    width: ${(props) =>
      props.artist_id === props.focus_id ? "200px" : "64px"};
    object-fit: cover;
    transition: width 0.3s ease;
  }
`;
export const LineupBannerImg = styled.img`
  display: flex;
  width: 64px;
  height: 130px;

  border-radius: 8px;
  border: 1px solid var(--use-stroke-stroke---white, #fff);
`;
export const LineupSinger = styled.p`
  color: var(--use-background-background---main, #fff);

  /* Button2 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.25px;

  position: absolute;
  bottom: 8px;
  left: 8px;

  z-index: 10;
`;
export const PlaylistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;
export const PlaylistGuide = styled.div`
  color: var(--use-font-font---info, #929292);

  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;
export const GuideBold = styled.span`
  color: var(--main-orange-900, #ff6739);
`;
export const Playlist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;
export const Music = styled.div`
  display: flex;
  padding: 8px 12px 8px 8px;
  align-items: center;
  align-self: stretch;
  gap: 8px;

  border-radius: 8px;
  background: var(--use-background-background---section, #fbfbfb);
`;
export const PlaylistTitle = styled.div`
  overflow: hidden;
  color: var(--use-font-font---body, #474747);
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Body2 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.25px;
`;
export const PlaylistImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid var(--use-stroke-stroke---disable, #e2e3ec);
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;
export const PlaylistLink = styled.a`
  margin-left: auto;
`;
export const Line = styled.div`
  height: 4px;
  align-self: stretch;
  background: var(--use-background-background---deep, #f1f1f1);
`;

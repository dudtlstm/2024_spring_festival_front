import { styled } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import Nav from "./components/layouts/nav/Nav";
import ScrollToTop from "./components/common/ScrollToTop";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

// 기본 view 설정 정의
const Wrapper = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 430px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  font-family: Pretendard;
  color: black;

  box-shadow: 0px 0px 10px 0px rgba(41, 41, 41, 0.25);
`;

const Content = styled.div`
  flex-grow: 1;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

// 상세페이지 url 패턴 정의
const idPattern = /^\/(booths|notice)\/([^/]+)$/;
const boothsDetailPattern = /^\/(booths)\/([^/]+)$/;

const Layout = () => {
  const location = useLocation();

  return (
    <BackGroundColor>
      <Wrapper>
        <Header currentPath={location.pathname} />
        <Content>
          <Outlet />
        </Content>
        {!idPattern.test(location.pathname) &&
          location.pathname !== "/about" && <Footer />}
        {!boothsDetailPattern.test(location.pathname) &&
          location.pathname !== "/about" && <Nav />}
      </Wrapper>
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Layout />
    </>
  );
}

export default App;

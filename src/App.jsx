import React, { useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import Nav from "./components/layouts/nav/Nav";
import ScrollToTop from "./components/common/ScrollToTop";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

//ga
const gaTrackingId = import.meta.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(gaTrackingId);

const history = createBrowserHistory();
history.listen((location) => {
  // console.log(location.pathname);
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

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

  padding-top: 52px;
`;

// 부스 상세 페이지 url 패턴 정의
const boothsDetailPattern = /^\/booths\/(28|29|30)\/(\d+)$/;

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (gaTrackingId) {
      const pagePath = location.pathname + location.search;
      // console.log(`Logging pageview for ${pagePath}`);
      ReactGA.set({ page: pagePath });
      ReactGA.pageview(pagePath);
    }
  }, [location]);

  return (
    <BackGroundColor>
      <Wrapper>
        <Header currentPath={location.pathname} />
        <Content>
          <Outlet />
        </Content>
        {!boothsDetailPattern.test(location.pathname) &&
          location.pathname !== "/about" && (
            <>
              <Footer />
              <Nav />
            </>
          )}
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

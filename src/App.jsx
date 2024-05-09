import { styled } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

// 기본 view 설정 정의
const Wrapper = styled.div` 
  flex-grow: 1;
  padding-top: 60px;
  margin: 0 auto;
  width: 100%;
  max-width: 420px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  font-family: NotoSansRegular;
  color: white;
`;

const Content = styled.div`
  flex-grow: 1;
  min-height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  const location = useLocation();

  return (
    <BackGroundColor>
      <Header />
      {/* {location.pathname !== "/" && <Header />} */}
      <Wrapper>
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Wrapper>
    </BackGroundColor>
  );
};

function App() {

  return (
    <>
    <GlobalStyle />
    <Layout />
    </>
  )
}

export default App

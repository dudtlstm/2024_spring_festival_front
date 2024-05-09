import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Mainpage from "./pages/mainpage/Mainpage";
import Booth from "./pages/booth/Booth";
import TimeTable from "./pages/timeTable/TimeTable";
import Notice from "./pages/notice/Notice";
import Promotion from "./pages/promotion/Promotion";
import About from "./pages/about/About";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 메인페이지
      { path: "/", element: <Mainpage /> },

      // 부스 페이지
      { path: "booths", element: <Booth /> },

      // 타임테이블 페이지
      { path: "/timeTable", element: <TimeTable /> },

      // 공지 페이지
      { path: "/notice", element: <Notice /> },

      // 홍보 페이지
      { path: "/promotion", element: <Promotion /> },
      { path: "/promotion/:id", element: <Promotion /> }, // 디테일 페이지 element 수정

      // about 페이지
      { path: "/about", element: <About /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

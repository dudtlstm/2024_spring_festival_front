import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Mainpage from "./pages/mainpage/Mainpage";
import Booth from "./pages/booth/Booth";
import TimeTable from "./pages/timeTable/TimeTable";
import Notice from "./pages/notice/Notice";
import Promotion from "./pages/promotion/Promotion";
import About from "./pages/about/About";
import NotFound from "./NotFound";
import BoothDetail from "./pages/booth/BoothDetail";
import NoticeDetail from "./pages/notice/NoticeDetail";
import TimeTable_28 from "./pages/timeTable/TimeTable_28";
import TimeTable_29 from "./pages/timeTable/TimeTable_29";
import TimeTable_30 from "./pages/timeTable/TimeTable_30";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 메인페이지
      { path: "/", element: <Mainpage /> },

      // 부스 페이지
      { path: "/booths", element: <Booth /> },
      { path: "/booths/:id", element: <BoothDetail /> },

      // 타임테이블 페이지
      // { path: "/performance", element: <TimeTable /> },
      { path: "/performance/28", element: <TimeTable_28 /> },
      { path: "/performance/29", element: <TimeTable_29 /> },
      { path: "/performance/30", element: <TimeTable_30 /> },

      // 공지 페이지
      { path: "/notice", element: <Notice /> },
      { path: "/notice/:id", element: <NoticeDetail /> }, // 디테일 페이지 element 수정

      // 홍보 페이지
      { path: "/promotion", element: <Promotion /> },

      // about 페이지
      { path: "/about", element: <About /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

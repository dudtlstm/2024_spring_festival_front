import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Mainpage from './pages/mainpage/Mainpage';
import Booth28 from './pages/booth/Booth28';
import Booth29 from './pages/booth/Booth29';
import TimeTable from './pages/timeTable/TimeTable';
import Notice from './pages/notice/Notice';
import Promotion from './pages/promotion/Promotion';
import About from './pages/about/About';
import NotFound from './NotFound';
import BoothDetail from './pages/booth/BoothDetail';
import NoticeDetail from './pages/notice/NoticeDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // 메인페이지
      { path: '/', element: <Mainpage /> },

      // 부스 페이지
      { path: 'booth28', element: <Booth28 /> },
      { path: 'booth29', element: <Booth29 /> },
      { path: 'booths/:id', element: <BoothDetail /> },

      // 타임테이블 페이지
      { path: '/timeTable', element: <TimeTable /> },

      // 공지 페이지
      { path: '/notice', element: <Notice /> },
      { path: '/notice/:id', element: <NoticeDetail /> }, // 디테일 페이지 element 수정

      // 홍보 페이지
      { path: '/promotion', element: <Promotion /> },

      // about 페이지
      { path: '/about', element: <About /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

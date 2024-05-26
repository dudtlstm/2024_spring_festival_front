import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --vh: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
    }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, 
  a, abbr, acronym, address, big, cite, 
  del, em, strong, dfn,  img, ins, kbd, q, s, samp,
  small, strike,  sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    border: 0;
    padding: 0;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  *[hidden] {
      display: none;
  }
  * { 
    font-family: 'Apple SD Gothic Neo' !important;
  }

  body {
    touch-action: manipulation;
    line-height: 1;
    -ms-overflow-style: none;
    scrollbar-width: none; /* 파이어폭스 */

    // 가운데 정렬
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* 위에가 styled-reset 내용 */

  * {
    box-sizing: border-box;
  } 
  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
    user-select: none;
  }
  ul, li {
    padding-left: 0rem;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }
  button {
    cursor: pointer;
    padding: 0;
  }
  input {
    appearance: none;
    
    &:focus {
      outline: none;
    }
  }
  select{
    border: none;
    &:focus {
      outline: none;
    }
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  .modal-open .header {
    z-index: 0 !important; /* 모달이 열렸을 때 헤더를 뒤로 보냄 이거 이제 제발 되어라 */
  }
`;

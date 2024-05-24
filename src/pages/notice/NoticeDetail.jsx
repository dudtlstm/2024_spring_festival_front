// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";
// import * as S from "../../components/notice/style";
// import { useParams } from "react-router-dom";
// import ReplyDeleteModal from "../../components/common/modal/promotionModal/ReplyDeleteModal"; // 모달 컴포넌트를 임포트합니다

// const NoticeDetail = () => {
//   const { id } = useParams();
//   const [noticeDetail, setNoticeDetail] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

//   useEffect(() => {
//     const fetchNoticeDetail = async () => {
//       try {
//         const response = await axios.get(
//           `https://mua-dongguk-server.site/api/v1/notice/${id}`
//         );
//         console.log(response.data);
//         setNoticeDetail(response.data);
//       } catch (error) {
//         console.error("Error fetching notice:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNoticeDetail();
//   }, [id]);

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? noticeDetail.images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === noticeDetail.images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleDeleteClick = () => {
//     setIsModalOpen(true); // 삭제 버튼 클릭 시 모달 열림
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // 모달 닫기
//   };

//   const handleConfirmDelete = () => {
//     // 삭제 확인 로직 추가
//     console.log("댓글이 삭제되었습니다.");
//     setIsModalOpen(false); // 모달 닫기
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!noticeDetail) {
//     return <div>No notice available</div>;
//   }

//   return (
//     <>
//       <S.ImageContainer>
//         <S.ImageNotice
//           src={noticeDetail.images[currentIndex]}
//           alt={`Notice image ${currentIndex + 1}`}
//         />
//         <S.LeftButton onClick={handlePrevClick} />
//         <S.RightButton onClick={handleNextClick} />
//       </S.ImageContainer>

//       <S.Pagination>
//         {noticeDetail.images.map((_, index) => (
//           <S.Dot key={index} active={index === currentIndex} />
//         ))}
//       </S.Pagination>

//       <S.Title>{noticeDetail.title}</S.Title>
//       <S.DetailBox>
//         <S.Detail>{noticeDetail.description}</S.Detail>
//       </S.DetailBox>
//       <S.InformationBox>
//         <S.Information>위치</S.Information>
//         <S.Information>시간</S.Information>
//         <S.Information>학과</S.Information>
//       </S.InformationBox>
//       <S.SeparationBar />
//       <S.ReplyBox>
//         <S.ReplyStart>댓글</S.ReplyStart>
//         <S.ReplyCount>3</S.ReplyCount>
//       </S.ReplyBox>
//       <S.ReplyAllBox>
//         <S.Reply>
//           애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요. 우리나라는
//           애국가에 특별한 이름을 붙이지 않고 국가(國歌)로 사용하고 있어요.
//         </S.Reply>
//         <S.ReplySub>
//           <S.ReplyData>2024/05/xx</S.ReplyData>
//           <S.ReplyDelete onClick={handleDeleteClick}>삭제</S.ReplyDelete>
//         </S.ReplySub>
//       </S.ReplyAllBox>
//       <S.BottomBox>
//         <S.HeartButton>하트</S.HeartButton>
//         <S.WriteReply>입력창</S.WriteReply>
//         <S.SendReply>보내기 버튼</S.SendReply>
//       </S.BottomBox>

//       <ReplyDeleteModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onConfirm={handleConfirmDelete}
//       />
//     </>
//   );
// };

// NoticeDetail.propTypes = {
//   noticeId: PropTypes.number.isRequired,
// };

// export default NoticeDetail;

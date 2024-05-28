import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import * as S from "../../components/booth/boothdetail/style";
import { useParams, useLocation } from "react-router-dom";
import ReplyDeleteModal from "../../components/common/modal/promotionModal/ReplyDeleteModal";
import PromotionModal from "../../components/common/modal/promotionModal/ReplyModal";
import styled from "styled-components";
import Spinner from "../../components/common/Spinner";
import { useCookies } from "react-cookie"; // Import the useCookies hook
import { currentDate } from "../../utils/currentDate";
// API
import { fetchPostLike, fetchDeleteLike } from "../../apis/api/boothLike";
// slider import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// img import
import send from "/booth/send.png";
import colorsend from "/booth/colorsend.png";

const StyledTextArea = styled.textarea`
  width: 242px;
  height: 24px;
  color: ${(props) =>
    props.hasValue ? "#000" : "var(--use-font-font---disable, #C4C4C4)"};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.25px;
  display: flex;
  justify-content: center;
  /* align-items: center; */ /* 중앙 정렬 제거 */
  gap: 10px;
  flex: 1 0 0;
  background-color: transparent;
  border: none;
  resize: none;
  overflow: hidden;
  &:focus {
    outline: none;
    border-color: transparent;
  }
  box-sizing: border-box;
  padding-bottom: 1px;
`;

const BoothDetail = () => {
  const { id } = useParams();
  const { date } = useParams();
  const location = useLocation();

  const [boothDetail, setBoothDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [cookies, setCookie] = useCookies(["isLiked"]); // Use the useCookies hook
  const [isReplyDeleteModalOpen, setReplyDeleteModalOpen] = useState(false);
  const [modalPassword, setModalPassword] = useState(""); // 실제 비밀번호를 여기에 설정합니다

  const placeholderImage = "/booth/booth2x.png";

  // 부스 id, 댓글 id
  const [commentId, setCommentId] = useState(null);

  const sliderRef = useRef(null);

  const openReplyDeleteModal = () => {
    setReplyDeleteModalOpen(true);
  };

  const closeReplyDeleteModal = () => {
    setReplyDeleteModalOpen(false);
  };

  const handlePasswordChange = (newPassword) => {
    setModalPassword(newPassword);
  };

  useEffect(() => {
    const fetchBoothDetail = async () => {
      try {
        const response = await axios.get(
          `https://mua-dongguk-server.site/api/v1/booth/${id}?date=${date}`
        );
        // console.log("부스 상세: ", response.data);
        setBoothDetail(response.data);
        setLikeCount(response.data.like_cnt);
        const likedStatus = localStorage.getItem(`liked_${id}`);
        if (likedStatus === "true") {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      } catch (error) {
        // console.error("Error fetching booth detail:", error);
        setError(error.message);
        setBoothDetail({
          id: 1,
          name: "String",
          description: "String",
          operator: "String",
          location: "String",
          during: "String",
          like_cnt: "Number",
          is_liked: true,
          images: ["", ""],
        });
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://mua-dongguk-server.site/api/v1/booth/${id}/comments?date=${date}`
        );
        // console.log("부스 댓글: ", response.data);
        const formattedComments = response.data.map((comment) => ({
          id: comment.id,
          content: comment.content,
          created_at: comment.created_at,
        }));
        setComments(response.data);
      } catch (error) {
        // console.error("Error fetching comments:", error);
      }
    };

    fetchBoothDetail();
    fetchComments();
  }, [id, date]);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const handleDeleteClick = (commentId) => {
    setCommentId(commentId);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    // console.log("댓글이 삭제되었습니다.");
    setIsDeleteModalOpen(false);
  };

  const handleCommentChange = useCallback((event) => {
    const { value } = event.target;
    // 댓글이 150자를 넘지 않도록 자름
    const truncatedValue = value.slice(0, 150);
    setNewComment(truncatedValue);
  }, []);

  const handleSubmitComment = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNewComment("");
    fetchComments(); // Fetch latest comments when the modal is closed
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `https://mua-dongguk-server.site/api/v1/booth/${id}/comments?date=${date}`
      );
      // console.log(response.data);
      const formattedComments = response.data.map((comment) => ({
        id: comment.id,
        content: comment.content,
        created_at: comment.created_at,
      }));
      setComments(response.data);
    } catch (error) {
      // console.error("Error fetching comments:", error);
    }
  };

  // 좋아요 버튼 클릭 함수 - api 요청
  const handleHeartClick = async () => {
    try {
      if (isLiked) {
        await fetchDeleteLike(id, date);
        setIsLiked(false);
        setLikeCount((prevCount) => prevCount - 1);

        localStorage.removeItem(`liked_${id}`);

        // console.log("좋아요 삭제");
      } else {
        await fetchPostLike(id, date);
        setIsLiked(true);
        setLikeCount((prevCount) => prevCount + 1);

        localStorage.setItem(`liked_${id}`, "true");
        // console.log("좋아요 추가");
      }
    } catch (error) {
      console.error(
        `좋아요를 ${isLiked ? "삭제하는" : "추가하는"} 중 오류 발생:`,
        error
      );
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!boothDetail) {
    return <div>No booth available</div>;
  }

  const images =
    boothDetail.images && boothDetail.images.length > 0
      ? boothDetail.images
      : [placeholderImage];

  const settings = {
    rows: 1,
    slidesPerRow: 1,
    dots: false,
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
  };

  return (
    <>
      <S.BoothDetailContainer>
        <S.ImageContainer>
          <Slider {...settings} ref={sliderRef}>
            {images.map((image, index) => (
              <S.ImageNotice
                key={index}
                src={image}
                alt={`Booth image ${index + 1}`}
                className={image === placeholderImage ? "placeholder" : ""}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderImage;
                }}
              />
            ))}
          </Slider>
          {images.length > 1 && (
            <>
              <S.LeftButton onClick={handlePrevClick} />
              <S.RightButton onClick={handleNextClick} />
            </>
          )}
        </S.ImageContainer>
        <S.Pagination>
          {images.map((_, index) => (
            <S.Dot
              key={index}
              active={index === currentIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </S.Pagination>
        <S.Title>{boothDetail.name}</S.Title>
        <S.DetailBox>
          <S.Detail>{boothDetail.description}</S.Detail>
        </S.DetailBox>
        <S.InformationBox>
          <S.Information>
            <S.InfoIcon src="/booth/reloca.png" alt="위치" />
            {boothDetail.location_info.location}
          </S.Information>
          <S.Information>
            <S.InfoIcon src="/booth/retime.png" alt="time" />
            {boothDetail.during}
          </S.Information>
          <S.Information>
            <S.InfoIcon src="/booth/repin.png" alt="pin" />
            {boothDetail.operator}
          </S.Information>
        </S.InformationBox>
        <S.SeparationBar />
        <S.ReplyBox>
          <S.ReplyStart>댓글</S.ReplyStart>
          <S.ReplyCount>{comments.length}</S.ReplyCount>
        </S.ReplyBox>
        {comments.map((comment, index) => (
          <S.ReplyAllBox
            key={comment.id}
            style={
              index === comments.length - 1 ? { paddingBottom: "60px" } : {}
            }
          >
            <S.Reply>{comment.content}</S.Reply>
            <S.ReplySub>
              <S.ReplyData>
                {new Date(comment.created_at).toLocaleDateString()}
              </S.ReplyData>
              <S.ReplyDelete onClick={() => handleDeleteClick(comment.id)}>
                삭제
              </S.ReplyDelete>
            </S.ReplySub>
          </S.ReplyAllBox>
        ))}

        <S.BottomBox>
          <S.Heart>
            <S.HeartButton
              src={isLiked ? "/booth/fullheart.png" : "/booth/heart.svg"}
              alt="좋아요"
              onClick={handleHeartClick}
            />
            <S.HeartCount>{likeCount}</S.HeartCount>
          </S.Heart>
          <S.WriteReply>
            <StyledTextArea
              hasValue={newComment.trim().length > 0}
              value={newComment}
              onChange={handleCommentChange}
              placeholder="댓글을 입력하세요"
            />
            <S.SendReply
              src={newComment.trim().length > 0 ? colorsend : send}
              alt="전송"
              onClick={
                newComment.trim().length > 0 ? handleSubmitComment : undefined
              } // 댓글이 비어있으면 클릭 이벤트 없음
              disabled={newComment.trim().length === 0} // 댓글이 비어있으면 버튼 비활성화 // 댓글이 비어있으면 버튼 비활성화
            />
          </S.WriteReply>
        </S.BottomBox>

        {isModalOpen && (
          <PromotionModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            description={newComment}
            title="비밀번호 설정"
            id={id}
            onCommentSubmit={fetchComments}
          />
        )}
        {isDeleteModalOpen && (
          <ReplyDeleteModal
            isOpen={isDeleteModalOpen}
            onClose={handleCloseDeleteModal}
            onConfirm={handleConfirmDelete}
            password={modalPassword}
            onPasswordChange={handlePasswordChange} // 비밀번호 변경 핸들러 추가
            boothId={id}
            commentId={commentId}
          />
        )}
      </S.BoothDetailContainer>
    </>
  );
};

export default BoothDetail;

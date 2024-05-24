import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import * as S from "../../components/booth/boothdetail/style";
import { useParams } from "react-router-dom";
import ReplyDeleteModal from "../../components/common/modal/promotionModal/ReplyDeleteModal";
import PromotionModal from "../../components/common/modal/promotionModal/ReplyModal";
import styled from "styled-components";
import Spinner from "../../components/common/Spinner";

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
  align-items: center;
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
  padding: 4px 8px;
  box-sizing: border-box;
`;

const BoothDetail = () => {
  const { id } = useParams();
  const [boothDetail, setBoothDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchBoothDetail = async () => {
      try {
        const response = await axios.get(
          `https://mua-dongguk-server.site/api/v1/booth/${id}`
        );
        console.log(response.data);
        setBoothDetail(response.data);
      } catch (error) {
        console.error("Error fetching booth detail:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://mua-dongguk-server.site/api/v1/booth/${id}/comments`
        );
        console.log(response.data);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchBoothDetail();
    fetchComments();
  }, [id]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? boothDetail.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === boothDetail.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true); // 삭제하기 버튼을 누르면 삭제 모달 열림
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false); // 삭제 모달 닫기
  };

  const handleConfirmDelete = () => {
    console.log("댓글이 삭제되었습니다.");
    setIsDeleteModalOpen(false);
  };

  const handleCommentChange = useCallback((event) => {
    setNewComment(event.target.value);
  }, []);

  const handleSubmitComment = () => {
    setIsModalOpen(true); // 전송하기 버튼을 누르면 ReplyModal 열림
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNewComment(""); // 모달이 닫힐 때 댓글 입력창 비우기
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

  return (
    <>
      <S.ImageContainer>
        <S.ImageNotice
          src={boothDetail.images[currentIndex]}
          alt={`Booth image ${currentIndex + 1}`}
        />
        <S.LeftButton onClick={handlePrevClick} />
        <S.RightButton onClick={handleNextClick} />
      </S.ImageContainer>
      <S.Pagination>
        {boothDetail.images.map((_, index) => (
          <S.Dot key={index} active={index === currentIndex} />
        ))}
      </S.Pagination>
      <S.Title>{boothDetail.name}</S.Title>
      <S.DetailBox>
        <S.Detail>{boothDetail.description}</S.Detail>
      </S.DetailBox>
      <S.InformationBox>
        <S.Information>{boothDetail.location}</S.Information>
        <S.Information>{boothDetail.during}</S.Information>
        <S.Information>{boothDetail.operator}</S.Information>
      </S.InformationBox>
      <S.SeparationBar />
      <S.ReplyBox>
        <S.ReplyStart>댓글</S.ReplyStart>
        <S.ReplyCount>{comments.length}</S.ReplyCount>
      </S.ReplyBox>
      {comments.map((comment) => (
        <S.ReplyAllBox key={comment.id}>
          <S.Reply>{comment.content}</S.Reply>
          <S.ReplySub>
            <S.ReplyData>
              {new Date(comment.created_at).toLocaleDateString()}
            </S.ReplyData>
            <S.ReplyDelete onClick={handleDeleteClick}>삭제</S.ReplyDelete>
          </S.ReplySub>
        </S.ReplyAllBox>
      ))}
      <S.BottomBox>
        <S.HeartButton src="../public/booth/heart.png" alt="좋아요" />
        <S.WriteReply>
          <StyledTextArea
            hasValue={newComment.trim().length > 0}
            value={newComment}
            onChange={handleCommentChange}
            placeholder="댓글을 입력하세요"
          />
        </S.WriteReply>
        <S.SendReply
          src="../public/booth/send.png"
          alt="전송"
          onClick={handleSubmitComment}
        />
      </S.BottomBox>
      {isModalOpen && (
        <PromotionModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          description={newComment}
          title="비밀번호 설정"
          id={id} // id 값을 전달
        />
      )}
      {isDeleteModalOpen && (
        <ReplyDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
};

export default BoothDetail;

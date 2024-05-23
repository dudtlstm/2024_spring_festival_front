import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import * as S from "../../components/notice/style";
import { useParams } from "react-router-dom";

const NoticeDetail = () => {
  const { id } = useParams();
  const [noticeDetail, setNoticeDetail] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        const response = await axios.get(
          `https://mua-dongguk-server.site/api/v1/notice/${id}`
        );
        console.log(response.data);

        setNoticeDetail(response.data);
      } catch (error) {
        console.error("Error fetching notice:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticeDetail();
  }, [id]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? noticeDetail.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === noticeDetail.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!noticeDetail) {
    return <div>No notice available</div>;
  }

  return (
    <>
      <S.ImageContainer>
        <S.ImageNotice
          src={noticeDetail.images[currentIndex]}
          alt={`Notice image ${currentIndex + 1}`}
        />
        <S.LeftButton onClick={handlePrevClick} />
        <S.RightButton onClick={handleNextClick} />
      </S.ImageContainer>

      <S.Pagination>
        {noticeDetail.images.map((_, index) => (
          <S.Dot key={index} active={index === currentIndex} />
        ))}
      </S.Pagination>

      <S.Title>{noticeDetail.title}</S.Title>
      <S.Detail>{noticeDetail.description}</S.Detail>
    </>
  );
};

NoticeDetail.propTypes = {
  noticeId: PropTypes.number.isRequired,
};

export default NoticeDetail;

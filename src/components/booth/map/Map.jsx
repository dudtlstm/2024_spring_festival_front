import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import MarkerBooth from '../../../../public/booth/marker_booth.svg';
import MarkerFood from '../../../../public/booth/marker_food.svg';
import MarkerMarket from '../../../../public/booth/marker_market.svg';

const dummyData = [
  {
    id: 1,
    name: '이름1',
    location: '위치1',
    latitude: 37.558288,
    longitude: 127.000173,
  },
  {
    id: 2,
    name: '이름2',
    location: '위치2',
    latitude: 37.54699,
    longitude: 127.09598,
  },
];

const Map = ({ data, category, selectedBoothId, resetData }) => {
  console.log('잘 받고있니>?', selectedBoothId);
  const [map, setMap] = useState();
  // const [data, setData] = useState([]);
  const markersRef = useRef([]);

  useEffect(() => {
    initMap();
  }, []);

  useEffect(() => {
    if (resetData) {
      initMap();
    }
  }, [resetData]);

  useEffect(() => {
    if (map) {
      makeMarker(data);
    }
  }, [map, data, category, selectedBoothId]);

  const initMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.558288, 127.000173),
      level: 4,
    };
    setMap(new kakao.maps.Map(container, options));
  };

  const changeMarkerImg = category => {
    switch (category) {
      case '푸드트럭':
        return new kakao.maps.MarkerImage(
          MarkerFood,
          new kakao.maps.Size(24, 35)
        );
      case '플리마켓':
        return new kakao.maps.MarkerImage(
          MarkerMarket,
          new kakao.maps.Size(24, 35)
        );
      default:
        return new kakao.maps.MarkerImage(
          MarkerBooth,
          new kakao.maps.Size(24, 35)
        );
    }
  };

  const makeMarker = data => {
    // 기존 마커 제거
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    if (data.length > 0) {
      data.forEach(item => {
        const markerImage = changeMarkerImg(category);

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(item.latitude, item.longitude),
          image: markerImage,
        });
        marker.setMap(map);
        markersRef.current.push(marker);

        if (selectedBoothId === item.id) {
          map.setCenter(new kakao.maps.LatLng(item.latitude, item.longitude));
          map.setLevel(2);
        }
      });
    }
  };

  useEffect(() => {
    initMap();
  }, []);

  return (
    <S.MapWrapper>
      <S.Map id="map" />
    </S.MapWrapper>
  );
};

export default Map;

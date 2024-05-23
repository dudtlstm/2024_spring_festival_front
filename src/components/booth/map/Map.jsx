import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import MarkerBooth from '../../../../public/booth/marker_booth.svg';

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

const Map = data => {
  const [map, setMap] = useState();
  // const [data, setData] = useState([]);
  const markersRef = useRef([]);

  console.log('data: ', data.data);

  useEffect(() => {
    initMap();
    // setData(dummyData);
  }, []);

  useEffect(() => {
    if (map) {
      makeMarker(data.data);
    }
  }, [map, data]);

  const initMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.558288, 127.000173),
      level: 4,
    };
    setMap(new kakao.maps.Map(container, options));
  };

  const makeMarker = data => {
    // 기존 마커 제거
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    if (data.length > 0) {
      data.forEach(item => {
        const markerImage = new kakao.maps.MarkerImage(
          MarkerBooth,
          new kakao.maps.Size(24, 35)
        );

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(item.latitude, item.longitude),
          image: markerImage,
        });
        marker.setMap(map);
        markersRef.current.push(marker);
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

import React, { useState, useEffect } from 'react';
import * as S from './style';

const Map = () => {
  const [map, setMap] = useState();
  const initMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.558288, 127.000173),
      level: 4,
    };
    setMap(new kakao.maps.Map(container, options));
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

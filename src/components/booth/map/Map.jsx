import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import MarkerBooth from '../../../../public/booth/marker_booth.svg';
import MarkerFood from '../../../../public/booth/marker_food.svg';
import MarkerMarket from '../../../../public/booth/marker_market.svg';

const Map = ({
  data,
  category,
  selectedBoothId,
  resetData,
  onMarkerClick,
  isFoodClicked,
}) => {
  const [map, setMap] = useState();
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
          position: new kakao.maps.LatLng(
            item.location_info.latitude,
            item.location_info.longitude
          ),
          image: markerImage,
        });
        marker.setMap(map);
        markersRef.current.push(marker);

        // Add click event listener for the marker
        kakao.maps.event.addListener(marker, 'click', () => {
          onMarkerClick(item.id);
        });

        if (selectedBoothId === item.id) {
          map.setCenter(
            new kakao.maps.LatLng(
              item.location_info.latitude,
              item.location_info.longitude
            )
          );
          map.setLevel(2);
        }

        if (isFoodClicked) {
          map.setCenter(
            new kakao.maps.LatLng(
              item.location_info.latitude,
              item.location_info.longitude
            )
          );
          map.setLevel(2);
        }
      });
    }
  };

  return (
    <S.MapWrapper>
      <S.Map id="map" />
    </S.MapWrapper>
  );
};

export default Map;

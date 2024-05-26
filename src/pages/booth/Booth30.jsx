import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Date30 from '../../components/booth/date/Date30';
import Map from '../../components/booth/map/Map';
import Category from '../../components/booth/category/Category';
import BoothList from '../../components/booth/boothList/BoothList';
import { booth } from '../../apis/api/booth';
import { boothDetail } from '../../apis/api/boothDetail';

const Booth30 = ({ date }) => {
  const [category, setCategory] = useState('부스');
  const [data, setData] = useState([]);
  const [selectedBoothId, setSelectedBoothId] = useState(null);
  const [isFoodClicked, setIsFoodClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const result = await booth(date, category);
      if (Array.isArray(result)) {
        setData(result);
      } else {
        // console.error('Expected an array but got:', result);
      }
    } catch (error) {
      // console.error('Fetch data error: ', error);
    }
  };

  const handleLocationClick = async id => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const locationData = await boothDetail(id, date);
      setData([locationData]);
      setSelectedBoothId(id);
    } catch (e) {
      // console.log(e);
    }
  };

  const handleMarkerClick = async id => {
    try {
      if (category === '푸드트럭') {
        const result = await booth(date, category);
        setData(result);
        setIsFoodClicked(true);
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
        const locationData = await boothDetail(id, date);
        setData([locationData]);
        setSelectedBoothId(id);
      }
    } catch (e) {
      // console.log(e);
    }
  };

  const resetData = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedBoothId(null);
    fetchData();
  };

  return (
    <>
      <Date30 url1={'/booth/28'} url2={'/booth/29'} />
      <Map
        data={data}
        category={category}
        selectedBoothId={selectedBoothId}
        resetData={resetData}
        onMarkerClick={handleMarkerClick}
        isFoodClicked={isFoodClicked}
      />
      <Category
        category={category}
        setCategory={setCategory}
        resetData={resetData}
      />
      <BoothList
        date={date}
        category={category}
        data={data}
        onLocationClick={handleLocationClick}
      />
    </>
  );
};

export default Booth30;

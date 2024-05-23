import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Date28 from '../../components/booth/date/Date28';
import Map from '../../components/booth/map/Map';
import Category from '../../components/booth/category/Category';
import BoothList from '../../components/booth/boothList/BoothList';
import { booth } from '../../apis/api/booth';

const Booth28 = ({ date }) => {
  const [category, setCategory] = useState('부스');
  const [data, setData] = useState([]);
  console.log('category:', category);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const result = await booth(date, category);
      console.log(result);
      if (Array.isArray(result)) {
        setData(result);
      } else {
        // console.error('Expected an array but got:', result);
      }
    } catch (error) {
      // console.error('Fetch data error: ', error);
    }
  };

  return (
    <>
      <Date28 url1={'/booth/29'} url2={'/booth/30'} />
      <Map data={data} />
      <Category category={category} setCategory={setCategory} />
      <BoothList date={date} category={category} data={data} />
    </>
  );
};

export default Booth28;

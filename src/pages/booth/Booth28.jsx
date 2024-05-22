import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Date28 from '../../components/booth/date/Date28';
import Map from '../../components/booth/map/Map';
import Category from '../../components/booth/category/Category';
import BoothList from '../../components/booth/boothList/BoothList';

const Booth28 = ({ date }) => {
  const [category, setCategory] = useState('부스');
  console.log('category:', category);
  return (
    <>
      <Date28 url1={'/booth/29'} url2={'/booth/30'} />
      <Map />
      <Category category={category} setCategory={setCategory} />
      <BoothList date={date} category={category} />
    </>
  );
};

export default Booth28;

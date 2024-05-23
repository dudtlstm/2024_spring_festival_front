import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Date29 from '../../components/booth/date/Date29';
import Map from '../../components/booth/map/Map';
import Category from '../../components/booth/category/Category';
import BoothList from '../../components/booth/boothList/BoothList';

const Booth29 = ({ date }) => {
  const [category, setCategory] = useState('부스');
  console.log('category:', category);
  return (
    <>
      <Date29 url1={'/booth/28'} url2={'/booth/30'} />
      <Map />
      <Category category={category} setCategory={setCategory} />
      <BoothList date={date} category={category} />
    </>
  );
};

export default Booth29;

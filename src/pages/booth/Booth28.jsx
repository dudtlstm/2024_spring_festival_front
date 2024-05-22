import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Date28 from '../../components/booth/date/Date28';
import Map from '../../components/booth/map/Map';
import Category from '../../components/booth/category/Category';
import BoothList from '../../components/booth/boothList/BoothList';

const Booth28 = ({ date }) => {
  const dates = ['부스', '푸드트럭', '플리마켓'];
  const [category, setCategory] = useState('부스');
  console.log('category:', category);
  return (
    <>
      {/* <div>Booth</div>
      <Link to={'/booths/1'}>detail 이동</Link> */}
      <Date28 />
      <Map />
      <Category category={category} setCategory={setCategory} />
      <BoothList date={date} />
    </>
  );
};

export default Booth28;

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
      {/* <div>Booth</div>
      <Link to={'/booths/1'}>detail 이동</Link> */}
      <Date29 />
      <Map />
      <Category category={category} setCategory={setCategory} />
      <BoothList date={date} category={category} />
    </>
  );
};

export default Booth29;

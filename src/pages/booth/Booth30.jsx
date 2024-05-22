import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Date30 from '../../components/booth/date/Date30';
import Map from '../../components/booth/map/Map';
import Category from '../../components/booth/category/Category';
import BoothList from '../../components/booth/boothList/BoothList';

const Booth30 = ({ date }) => {
  console.log('date: ', date);
  return (
    <>
      {/* <div>Booth</div>
      <Link to={'/booths/1'}>detail 이동</Link> */}
      <Date30 />
      <Map />
      <Category />
      <BoothList date={date} />
    </>
  );
};

export default Booth30;

import React from 'react';
import { Link } from 'react-router-dom';
import Date28 from '../../components/booth/date/Date28';
import Map from '../../components/booth/map/Map';

const Booth28 = () => {
  return (
    <>
      {/* <div>Booth</div>
      <Link to={'/booths/1'}>detail 이동</Link> */}
      <Date28 />
      <Map />
    </>
  );
};

export default Booth28;

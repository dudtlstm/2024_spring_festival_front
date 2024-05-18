import React from 'react';
import { Link } from 'react-router-dom';
import DataSelector from '../../components/booth/dateSelector/DateSelector';

const Booth = () => {
  return (
    <>
      {/* <div>Booth</div>
      <Link to={'/booths/1'}>detail 이동</Link> */}
      <DataSelector />
    </>
  );
};

export default Booth;

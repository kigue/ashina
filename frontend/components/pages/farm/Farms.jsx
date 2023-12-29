import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../farm/navigation/Navbar'; // Adjust the import path as needed
import IconNav from '../farm/navigation/IconNav'; // Adjust the import path as needed
import FarmSelection from './FarmSelection';
import HomeCards from '../farm/cards/HomeCards';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FarmListings from './Listings';
import FarmOrders from './Orders';
import FarmInventory from './Inventory';

function Farm() {
  const [selectedFarm, setSelectedFarm] = useState(null);

  // Additional logic for fetching farms and managing selection could be added here

  return (
    <div className='container-fluid'>
      <div className='row' style={{ backgroundColor: 'darkgreen' }}>
        <Navbar/>
      </div>
      <div className='row'>
        <IconNav />
      </div>
      <div className='row'>
        <div className='col' style={{ backgroundColor: 'green' }}>
          <ContentBasedOnCategory/>
        </div>
      </div>
    </div>
  );
}

function ContentBasedOnCategory({ selectedFarm, onSelectFarm }) {
  const { category } = useParams();

  switch (category) {
    case 'home':
      return <HomeCards/>;
    case 'listings':
      return <FarmListings/>;
    case 'orders':
      return <FarmOrders/>;
    case 'inventory':
      return <FarmInventory/>;
    default:
      return <FarmSelection/>;

  }
}

export default Farm;

import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

// Import your components
import Navbar from '../marketplace/navigation/Navbar.jsx';
import HomePage from '../marketplace/home/Home.jsx'
import CropPage from '../marketplace/cropPools/CropPool.jsx'
import InputsPage from '../marketplace/inputs/InputsCard.jsx';
import LandsPage from '../marketplace/land/LandCard.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import IconNav from '../marketplace/navigation/IconNav.jsx';
import App from '../../../App.jsx';

class Marketplace extends Component {
  render() {
    return (
      <div className='container-fluid p-0'>
        <div className='row m-0' style={{ backgroundColor: 'darkgreen' }}>
          <Navbar />
        </div>
        <div className='row m-0'>
          <IconNav />
        </div>
        <div className='row m-0' style={{backgroundColor: 'green'}}>
            <ContentBasedOnCategory />
        </div>
      </div>
    );
  }
}

function ContentBasedOnCategory({ filters }) {
  const { category } = useParams(); // Get the category parameter from the URL

  switch (category) {
    case 'farms':
      return <HomeContent />;
    case 'inputs':
      return <MyInputShops filters={filters} />;
    case 'farm shops':
      return <MyFarmShops filters={filters} />;
    case 'crop pools':
      return <MyCropPools filters={filters} />;
    case 'land & invest':
      return <LandsContent filters={filters} />;
    default:
      return <MyInputShops/>;
  }
}

function HomeContent() {
  return <HomePage />;
}

function MyInputShops() {
  return <InputsPage />  

}

function LandsContent() {
  return <LandsPage />  
}

function MyCropPools() {
    return <CropPage />
}

function ProduceContent() {
}

export default Marketplace;

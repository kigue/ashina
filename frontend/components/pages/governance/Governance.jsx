import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../governance/navigation/Navbar'; // Adjust the import path as needed
import IconNav from '../governance/navigation/IconNav'; // Adjust the import path as needed
import GovernanceHome from './Home';


function Governance() {


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
      return <GovernanceHome/>;
    case 'committies':
      return <p>Create Pages!</p>;
    case 'proposals':
      return <p>Create Pages!</p>;
    case 'regulations':
      return <p>Create Pages!</p>;
    case 'sustainability':
      return <p>Create Pages!</p>;
    default:
        return <GovernanceHome/>;
        


  }
}


export default Governance;

import React, { Component } from 'react';
import { useParams } from 'react-router-dom';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import JobNav from '../home/navigation/Navbar.jsx';
import JobListing from './Jobs.jsx'

class Jobs extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row' style={{ backgroundColor: 'darkgreen' }}>
          <JobNav />
        </div>
      <div className='row' style={{backgroundColor: 'green'}}>
          <div className='col'>
            {/* Render content based on the category parameter */}
            <ContentBasedOnCategory />
          </div>
        </div>
      </div>
    );
  }
}

// Create a function component for rendering content based on the category parameter
function ContentBasedOnCategory() {
  const { category } = useParams(); // Get the category parameter from the URL

  // Determine which content to render based on the category
  switch (category) {
    case 'postings':
      return <Listings />;
    case 'my applications':
      return <Applications />;
    case 'produce':
      return <ProduceContent />;
    // Add cases for other categories
    default:
      return <JobListing />;

  }
}

// Define separate components for different categories
function Listings() {
  return <JobListing />;
}

function Applications() {
  return <div>My Listings Content</div>;
}

function ProduceContent() {
    return <p>Nothing</p>;
}

function DefaultContent() {
  return <div>Default Content</div>;
}

export default Jobs;

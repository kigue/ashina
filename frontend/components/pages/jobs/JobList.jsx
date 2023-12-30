import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

function JobList() {

  const items = [
    {
      jobTitle: 'Harvest Manager',
      farmName: 'Sunny Acres Farm',
      location: 'Springfield, IL',
      description: 'Oversee the harvest of crops, manage schedules, and ensure quality control.',
      daysAgoPosted: 5,
    },
    {
      jobTitle: 'Farm Hand',
      farmName: 'Green Valley Ranch',
      location: 'Boulder, CO',
      description: 'General farm duties including planting, maintenance, and harvesting.',
      daysAgoPosted: 2,
    },
    // ... additional jobs
  ];

  return (
    <ListGroup as="ol" numbered className="mt-3">
      {items.map((item, index) => (
        <ListGroup.Item as="li" key={index} className="d-flex justify-content-between align-items-start p-3" style={{backgroundColor: 'beige'}}>
          <div className="ms-2 me-auto">
            <div className="fw-bold" style={{ fontSize: '1.1rem', color: '#0d6efd', textAlign: 'left' }}>
            <div className="fw-bold" style={{ fontSize: '1.1rem', color: '#0d6efd', textAlign: 'left' }}>
              {item.jobTitle} <span style={{ fontWeight: 'normal', color: '#6c757d' }}>at {item.farmName}</span>
            </div>
              <span style={{ fontWeight: 'normal', color: '#6c757d', display: 'block' }}>{item.location}</span>
            </div>
          </div>
          <Badge bg="success" pill style={{ fontSize: '0.85rem' }}>
            {item.daysAgoPosted}d
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default JobList;

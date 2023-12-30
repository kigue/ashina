import React, {Component} from 'react'
// import '../App.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import JobList from './JobList.jsx'
import JobDesc from './JobCard.jsx'



class Jobs_Listing extends Component{

  render() {
    return(
    <div className='row'>
          <div className='col' style={{backgroundColor: '', width: '600px'}}>
            <JobList/>
          </div>
          <div className='col' style={{backgroundColor: '', width: '600px', height: '600px'}}>
            <JobDesc/>
          </div>
        </div>

    )
  }
}
export default Jobs_Listing;

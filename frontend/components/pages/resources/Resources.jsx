import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

// Import your components
import Navbar from '../resources/navigation/Navbar.jsx';
import BlogPage from '../resources/blog/Blog.jsx'
import ForumPage from '../resources/forum/Form.jsx'
import VideoPage from '../resources/videos/Videos.jsx';
import NGOPage from '../resources/ngo/Ngo.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import IconNav from '../resources/navigation/IconNav.jsx';
import App from '../../../App.jsx';

class Resources extends Component {
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
    case 'blog':
      return <BlogContent />;
    case 'forum':
      return <ForumContent/>;
    case 'video':
      return <VideoContent/>;
    case 'ngo':
      return <NGOContent/>;
    default:
      return <p>Create Pages</p>;
  }
}

function BlogContent() {
  return <BlogPage />;
}

function ForumContent() {
  return <ForumPage />  

}

function VideoContent() {
  return <VideoPage />  
}

function NGOContent() {
    return <NGOPage />
}

function ProduceContent() {
}

export default Resources;

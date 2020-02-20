import React from 'react';
import dataStore from '../../helpers/dataStore';
import './Videos.css';

function Videos() {

  const formatVideoHtml = () => {
    const videos = dataStore.videos;
  
    return videos.map((video, index) => 
      <div key={index} className='video'>
        <h2 className='header'>{video.title}</h2>
        <iframe 
        title={index}
        width="560" 
        height="315" 
        src={video.src}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        ></iframe>
      </div>
    )
  }

  return (
    <div className="Videos">
      <h1 className='header'>Videos</h1>
      {formatVideoHtml()}
    </div>
  )
}

export default Videos;
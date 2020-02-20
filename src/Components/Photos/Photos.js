import React from 'react';
import dataStore from '../../helpers/dataStore';
import './Photos.css';

function Photos() {
  const formatPhotoHtml = () => {
    const photos = dataStore.photos;

    return photos.map((photo, index) => (
      <img className="Photo" key={index} src={photo.src} />
    ))
  }
  return (
    <div className="Photos">
      <h1 className="header">Photos</h1>
      <div className="PhotosWrapper">
        {formatPhotoHtml()}
      </div>
    </div>
  )
}

export default Photos;
import React from 'react';
import PhotosService from '../../services/photos-api-service';
import './Photos.css';

class Photos extends React.Component {
  state = {
    photos: [],
    error: null
  }

  formatPhotoHtml = () => {
    const photos = this.state.photos;

    return photos.map((photo, index) => (
      <img className="Photo" key={index} src={photo.photo_url} alt={photo.photo_description} />
    ))
  }

  componentDidMount() {
    PhotosService.getPhotos()
      .then(res => {
        this.setState({
          photos: res,
          error: null,
        })
      })
      .catch(error => this.setState(error))
  }

  render () {
    const error = this.state.error;

    return (
      <div className="Photos">
        <h1 className="header">Photos</h1>
        <div role='alert' className='italic'>
          {error && <p className='alert'>{error}</p>}
        </div>
        <div className="PhotosWrapper">
          {this.formatPhotoHtml()}
        </div>
      </div>
    )
  }
}

export default Photos;
import React from 'react';
import VideosService from '../../services/videos-api-service';
import './Videos.css';

class Videos extends React.Component {
  state = {
    videos: [],
    error: null
  }

  formatVideoHtml = () => {
    const videos = this.state.videos;
  
    return videos.map((video, index) => 
      <div key={index} className='video'>
        <h2 className='header'>{video.video_title}</h2>
        <iframe 
        title={video.video_title}
        width="560" 
        height="315" 
        src={video.video_url}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        ></iframe>
      </div>
    )
  }

  componentDidMount () {
    VideosService.getVideos()
      .then(res => {
        this.setState({
          videos: res,
          error: null
        })
      })
      .catch(error => this.setState({ error }))
  }

  render () {
    const { error } = this.state;
    return (
      <div className="Videos">
        <h1 className='header'>Videos</h1>
        <div role='alert' className='italic'>
          {error && <p className='alert'>{error}</p>}
        </div>
        {this.formatVideoHtml()}
      </div>
    )
  }
}

export default Videos;
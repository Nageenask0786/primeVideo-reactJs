import ReactPlayer from 'react-player'

import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <button className="movie-item-container" type="button">
          <img src={thumbnailUrl} alt="thumbnail" className="image" />
        </button>
      }
    >
      {close => (
        <>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose />
          </button>
          <ReactPlayer url={videoUrl} />
        </>
      )}
    </Popup>
  )
}

export default MovieItem

import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const ActionMovies = moviesList.filter(each => each.categoryId === 'ACTION')

    const ComedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="image"
        />
        <div className="bg-container">
          <h1>Action Movies</h1>
          <MoviesSlider moviesList={ActionMovies} />
          <h1>Comedy Movies</h1>
          <MoviesSlider moviesList={ComedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo

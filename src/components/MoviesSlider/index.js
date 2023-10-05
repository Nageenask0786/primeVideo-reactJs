import {Component} from 'react'

import Slider from 'react-slick'

import MovieItem from '../MovieItem'

class MoviesSlider extends Component {
  render() {
    const {moviesList} = this.props
    const ActionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
    console.log(ActionMovies)
    const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToscroll: 1,
    }
    return (
      <div>
        <Slider {...settings}>
          {moviesList.map(each => (
            <MovieItem movieDetails={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  }
}
export default MoviesSlider

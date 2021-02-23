import React, { Component } from 'react'
import Swiper from "swiper"
import "swiper/css/swiper.css"
export default class Swiper extends Component {
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-pagination" style={{display: this.props.pagination? 'block': 'none'}}></div>

        <div className="swiper-button-prev" style={{display: this.props.navigation? 'block': 'none'}}></div>
        <div className="swiper-button-next" style={{display: this.props.navigation? 'block': 'none'}}></div>
      </div>
    )
  }
}

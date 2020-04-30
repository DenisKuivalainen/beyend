import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import './Ascention.css';

class CustomSlider extends Component {
  render() {
    const settings =  {
        centerMode: true,
        // dots: true,
        shift: 10,
        initialSlide: 0
    };
    return (
        <Slider class="container " { ...settings }>
            <div class="container ">
                <div class="container__wrapper">
                    <div class="container__content">
                    <iframe class="scroll" title="game video" width="399" height="399" src="https://www.youtube.com/embed/_xKCwzgI68s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="container ">
                <div class="container__wrapper">
                    <div class="container__content">
                        <img class="scroll" src="https://funart.pro/uploads/posts/2020-01/1580130510_51-p-sialii-zhivotnie-113.jpg" alt="first img" />
                    </div>
                </div>
            </div>
            <div class="container ">
                <div class="container__wrapper">
                    <div class="container__content">
                        <img class="scroll" src="https://funart.pro/uploads/posts/2020-01/1580130510_51-p-sialii-zhivotnie-113.jpg" alt="first img" />
                    </div>
                </div>
            </div>
            <div class="container ">
                <div class="container__wrapper">
                    <div class="container__content">
                        <img class="scroll" src="https://funart.pro/uploads/posts/2020-01/1580130510_51-p-sialii-zhivotnie-113.jpg" alt="first img" />
                    </div>
                </div>
            </div>
        </Slider>
    );
  }
}

export default CustomSlider
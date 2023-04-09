import React,{Component} from 'react';
import Slider from "react-slick";

export default class SimpleSlider extends Component {    
    render() {
            const settings = {
              dots: true,
              infinite: true,
              speed: 500,              
              slidesToShow: 2,
              slidesToScroll: 2
            };
            return (
                <div>                  
                  <Slider {...settings}>
                    <div><img src="img/banner00.webp"/></div>
                    <div><img src="img/banner01.webp"/></div>
                    <div><img src="img/banner02.webp"/></div>
                    <div><img src="img/banner03.webp"/></div>
                    <div><img src="img/banner04.webp"/></div> 
                    <div><img src="img/banner05.webp"/></div>
                    <div><img src="img/banner06.webp"/></div> 
                    <div><img src="img/taroball.webp"/></div>                        
                  </Slider>
                </div>
              );
    }
  }
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import paulo from './img/magazyn_gastronomiczny_kurt_scheller.jpg'
import magda from './img/magda.jpg'
import kucharz from './img/kucharz1.jpg'
import pobrane from './img/pobrane.jpg'
import tlo from './img/brick-2906556_1920.jpg'

const img1 = paulo;
const img2 = magda;
const img3 = kucharz;
const img4 = pobrane;
const bgc = tlo;

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (

            <div className="py-5">
                <h2 className="mainText">Nasi kucharze</h2>
                <div className="underline"></div>
                <div style={{ backgroundImage: `url(${bgc})`, backgroundSize: `cover`, backgroundPosition: "center", padding: 50 }}>
                    <div className="container">

                        <Slider {...settings}>

                            <div className="card-group">
                                <div style={{borderRadius: '20px', minWidth:'150px'}} className="card mx-4">
                                    <img src={img1} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Paulo</h5>
                                        <p className="card-text text-center">Szef kuchni</p>
                                    </div>
                                    <div className="card-footer  d-flex justify-content-around">
                                        <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                        <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                                        <a href='https://www.twitter.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a></div>
                                </div>
                            </div>


                            <div className="card-group">
                                <div style={{borderRadius: '20px', minWidth:'150px'}} className="card mx-4">
                                    <img src={img2} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Madzia</h5>
                                        <p className="card-text text-center">Pomoc kucharza</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-around">
                                    <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                        <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                                        <a href='https://www.twitter.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a></div>
                                </div>
                            </div>



                            <div className="card-group">
                                <div style={{borderRadius: '20px', minWidth:'150px'}} className="card mx-4">
                                    <img src={img3} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Pablo</h5>
                                        <p className="card-text text-center">kucharz</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-around">
                                    <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                        <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                                        <a href='https://www.twitter.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a></div>
                                </div>
                            </div>



                            <div className="card-group">
                                <div style={{borderRadius: '20px', minWidth:'150px'}} className="card mx-4">
                                    <img src={img4} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Felicia</h5>
                                        <p className="card-text text-center">Pomoc kucharza</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-around">
                                    <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                        <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                                        <a href='https://www.twitter.com/' target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a></div>
                                </div>
                            </div>



                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
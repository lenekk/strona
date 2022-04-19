import React from 'react';
import img from './img/spaghetti-1932466_1920.jpg'

const SecondSection = () => {

    const image = img;

    return (
        <>
            <section className="py-5">
                <h2 className="mainText">Nasze wyróżnienia</h2>
                <div className="underline"></div>


                <div className="obrazek2" style={{ backgroundImage: `url(${image})`, backgroundSize: `cover` }}>
                    <div className="cien2"></div>

                    <div className="container py-5">

                        <div className="row justify-content-center" style={{color:'white'}}>

                            <div className="col-sm-6 col-md-4 text-center mt-5">
                                <p><i className="fas fa-trophy" style={{textShadow: '1px 1px 10px yellow'}}></i></p>
                                <strong><p className="aboutUsCardTitle mb-2">Michelin Guide 2020</p></strong>
                                <p className="aboutUsCardText mb-5">Z naszego kateringu korzystają najlepsi sportowcy</p>
                            </div>

                            <div className="col-sm-6 col-md-4 text-center mt-5">
                                <p><i className="fas fa-trophy" style={{textShadow: '1px 1px 10px yellow'}}></i></p>
                                <strong><p className="aboutUsCardTitle mb-2">Gault&Millau Polska 2020</p></strong>
                                <p className="aboutUsCardText mb-5">Z naszego kateringu korzystają najlepsi sportowcy</p>
                            </div>

                            <div className="col-sm-6 col-md-4 text-center mt-5">
                                <p><i className="fas fa-trophy" style={{textShadow: '1px 1px 10px yellow'}}></i></p>
                                <strong><p className="aboutUsCardTitle mb-2">Poland 100 Best Restaurants!</p></strong>
                                <p className="aboutUsCardText mb-5">Z naszego kateringu korzystają najlepsi sportowcy</p>
                            </div>

                        </div>

                    </div>

                </div>




            </section>

        </>
    );
}

export default SecondSection;
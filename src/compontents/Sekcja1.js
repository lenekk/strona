import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function FirstSection(){
    return(
        <>
            <div className="container">
                <h2 className="mainText">Dlaczego my?</h2>
                <div className="underline"></div>
                
                <div className="row  border border-secondary" style={{backgroundColor:'white'}}>
                <div className="col-sm-6 col-md-4 text-center opakowanie mt-5">
                    <p><i className="fas fa-futbol"></i></p>
                    <strong><p className="aboutUsCardTitle mb-2">Sport</p></strong>
                    <p className="aboutUsCardText mb-5">Z naszego kateringu korzystają najlepsi sportowcy</p>
                </div>
                
                <div className="col-sm-6 col-md-4 text-center opakowanie mt-5">
                    <p><i className="far fa-snowflake"></i></p>
                    <strong><p className="aboutUsCardTitle mb-2">Bez mrożonek</p></strong>
                    <p className="aboutUsCardText mb-5">Wszystkie potrawy przygotowywane są na miesjcu</p>
                </div>

                <div className="col-sm-6 col-md-4 text-center opakowanie mt-5">
                    <p><i className="fas fa-dna"></i></p>
                    <strong><p className="aboutUsCardTitle mb-2">Bez GMO</p></strong>
                    <p className="aboutUsCardText mb-5">Korzystamy tylko z produktów ekologicznych</p>
                </div>

                <div className="col-sm-6 col-md-4 text-center opakowanie mt-5">
                    <p><i className="fas fa-weight"></i></p>
                    <strong><p className="aboutUsCardTitle mb-2">Szybka utrata wagi</p></strong>
                    <p className="aboutUsCardText mb-5">Dzięki specjalnemu doborowi diety gwarantujemy szybką utratę wagi</p>
                </div>

                <div className="col-sm-6 col-md-4 text-center opakowanie mt-5">
                    <p><i className="fas fa-heartbeat"></i></p>
                    <strong><p className="aboutUsCardTitle mb-2">Zdrowie!</p></strong>
                    <p className="aboutUsCardText mb-5">Wszystkie nasze produkty posiadają certyfikat zdrowej żywności</p>
                </div>

                <div className="col-sm-6 col-md-4 text-center opakowanie mt-5">
                    <p><i className="fas fa-head-side-cough-slash"></i></p>
                    <strong><p className="aboutUsCardTitle mb-2">Najwyższe standardy sanitarne</p></strong>
                    <p className="aboutUsCardText mb-5">Pracujemy w jednorazowwych maseczkach i rękawiczkach</p>
                </div>

                </div>

            </div>

            
            

        </>
    )
}
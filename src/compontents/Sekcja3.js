import React from "react";

const ThrirdSection = () => {

    return (
        <>
            <h2 className="mainText">Najpopularniejsze</h2>
            <div className="underline"></div>

            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-md-6 col-xl-4">
                        <div className="ramka">
                            <h4>Dieta Junior</h4>
                            <hr></hr>
                            <p><span>Ilość posiłków: </span>3</p>
                            <p><span>Ilość kalorii: </span>1000 kcal</p>
                            <p><span>Przeznaczenie: </span>dla leniuchów</p>
                            <p><span>Deser: </span>nie</p>
                            <p><span>Cena: </span>50zł / szt.</p>
                            <p className='text-info' style={{fontSize:'20px',marginTop:'30px'}}><strong>Tylko w tym miesiącu!</strong></p>
                            
                        </div>
                    </div>

                    <div className="col-md-6 col-xl-4">
                        <div style={{boxShadow: '10px 10px 10px rgba(8, 89, 196, 0.6)'}} className="ramka">
                            <h4>Dieta Standard</h4>
                            <hr></hr>
                            <p><span>Ilość posiłków: </span>3</p>
                            <p><span>Ilość kalorii: </span>1700 kcal</p>
                            <p><span>Przeznaczenie: </span>dla osób aktywnych</p>
                            <p><span>Deser: </span>tak</p>
                            <p><span>Cena: </span>80zł / szt.</p>
                            <p className='text-primary' style={{fontSize:'20px',marginTop:'30px'}}><strong>Tylko w tym tygodniu!</strong></p>
                        </div>
                    </div>

                    <div className="col-md-6 col-xl-4">
                        <div className="ramka">
                            <h4>Dieta Fish</h4>
                            <hr></hr>
                            <p><span>Ilość posiłków: </span>3</p>
                            <p><span>Ilość kalorii: </span>2500 kcal</p>
                            <p><span>Przeznaczenie: </span>dla sportowców</p>
                            <p><span>Deser: </span>tak</p>
                            <p><span>Cena: </span>75zł / szt.</p>
                            <p className='text-info' style={{fontSize:'20px',marginTop:'30px'}}><strong>Tylko w tym miesiącu!</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThrirdSection;
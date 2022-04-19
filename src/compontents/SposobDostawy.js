import React from 'react';

const SposobDostawy = (props) => {


    return (
        <>
            <div className="container d-flex justify-content-around mt-5 text-center flex-wrap">
                <div onClick={() => props.dostawaH(0, props.isReady)} className={`${props.dostawaV[0].css} + dostawa-box`}>
                    <p style={{ display: 'block' }}>Odbiór osobisty</p>
                    <hr></hr>
                    <i className="fas fa-store"></i>
                    <hr></hr>
                    <p style={{ display: 'block' }}>Koszt: <span>darmowy</span></p>
                </div>
                <div onClick={() => props.dostawaH(1, props.isReady)} className={`${props.dostawaV[1].css} + dostawa-box`}>
                    <p style={{ display: 'block' }}>Kurier</p>
                    <hr></hr>
                    <i className="fab fa-ups"></i>
                    <i className="fas fa-shipping-fast ml-3"></i>
                    <hr></hr>
                    <p style={{ display: 'block' }}>Koszt: <span>10zł</span></p>
                </div>
                <div onClick={() => props.dostawaH(2, props.isReady)} className={`${props.dostawaV[2].css} + dostawa-box`}>
                    <p style={{ display: 'block' }}>Kurier pobranie</p>
                    <hr></hr>
                    <i className="fab fa-ups"></i>
                    <i className="fas fa-shipping-fast ml-3"></i>
                    <i className="fas fa-dollar-sign ml-3"></i>
                    <hr></hr>
                    <p style={{ display: 'block' }}>Koszt: <span>15zł</span></p>
                </div>
            </div>
        </>
    );
}

export default SposobDostawy;
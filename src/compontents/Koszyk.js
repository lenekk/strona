import React from 'react'
import Okno from '../compontents/Okno'

const Koszyk = (props) => {

    const [isOpen, setOpen] = React.useState(false)

    const isOpenHandler = (e) => {
        e.preventDefault();
        setOpen(!isOpen)
    }

    const productsCounter = () => {
        let counter = 0;

        props.koszyk.forEach(product => {
            counter = counter + product.count
        });

        return counter;
    }

    const productsCount = productsCounter();

    const text = <div style={{top:'0'}}>
        <div onClick={isOpenHandler} className='kosz'><p><i className="fas fa-shopping-cart">{productsCount}</i></p></div>
        <a style={{color: 'black'}} href='https://www.messenger.com/' target="_blank" rel="noopener noreferrer"><p className="fb"><i className="fab fa-facebook-messenger"></i></p></a>
        <a style={{color: 'black'}} href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><p className="ig"><i className="fab fa-instagram"></i></p></a>
        </div>

    return (

        <div>
            <div className="koszyk">
                {text}
            </div>

            {isOpen && <Okno open={isOpenHandler} clearKoszyk={props.clearKoszyk} dostawaH={props.dostawaH} dostawaV={props.dostawaV} removeItem={props.removeItem} count={props.count} dieta={props.koszyk} remove={props.remove} add={props.add} productsCount={productsCount} suma={props.suma}></Okno>}
        </div>
    );
}

export default Koszyk;
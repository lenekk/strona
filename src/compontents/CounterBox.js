import React from 'react';

const CounterBox = (props) => {

    return ( 
        <div className="container text-center mt-3">
            <i onClick={(e) => props.count(e, props.index)} className="far fa-plus-square px-2 plus"></i>
            <span>{props.dieta}</span>
            <i onClick={(e) => props.removeItem(e, props.index)} className="far fa-minus-square px-2 plus"></i>
        </div>
     );
}
 
export default CounterBox;
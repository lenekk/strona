import React from 'react';
import YouTube from 'react-youtube';

const Fifth = () => {
    return (
        <section id="onas" className='pt-5'>
        <div className="py-4">   
            <h2 className="mainText">O nas</h2>
            <div className="underline"></div>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <p style={{marginBottom: '40px', textAlign: 'center', fontSize: '25px', fontFamily: 'Caveat, cursive'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras semper. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Eleifend donec pretium vulputate sapien nec. Vitae nunc sed velit dignissim sodales ut eu sem integer. Risus nec feugiat in fermentum posuere urna nec tincidunt. Elit ut aliquam purus sit. Mauris sit amet massa vitae tortor condimentum lacinia. Quam pellentesque nec nam aliquam sem et tortor consequat id. Risus in hendrerit gravida rutrum. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Vitae congue mauris rhoncus aenean vel elit scelerisque. Id leo in vitae turpis massa sed elementum tempus egestas. Nisl condimentum id venenatis a condimentum vitae. Amet est placerat in egestas erat imperdiet sed. Nisl suscipit adipiscing bibendum est ultricies integer quis. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Sagittis orci a scelerisque purus.</p>

                {<div className="mt-5 mb-5 embed-responsive embed-responsive-16by9">
                    <YouTube videoId='ZRnIn8IS2JA'></YouTube>
                </div>}  

            </div>
            
        </div>

        </section>
    );
}

export default Fifth;
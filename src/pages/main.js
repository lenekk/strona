import React, {useEffect} from 'react';
import Header from '../compontents/Naglowek'
import Fifth from '../compontents/Sekcja5'
import FirstSection from '../compontents/Sekcja1'
import SecondSection from '../compontents/Sekcja2'
import ThrirdSection from '../compontents/Sekcja3'
import Fourth from '../compontents/Sekcja4'
import Footer from '../compontents/Footer'



const Main = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return ( 
        <>
        <Header></Header>
        <Fifth></Fifth>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThrirdSection></ThrirdSection>
        <Fourth></Fourth>
        <Footer></Footer>
        </>
    );
}

export default Main;



import React from 'react'
import Map from '../compontents/Map'
import Footer from '../compontents/Footer'
import food from '../compontents/img/darkMood.jpg'
import dostawa from '../compontents/img/Pizza-delivery-illustration-transparent-PNG.png'

const dane = [
    {
        id: 0,
        miejscowosc: 'Ozorków',
        lat: 51.95353109257587,
        lng: 19.314444848236644
    },

    {
        id: 1,
        miejscowosc: 'Warszawa',
        lat: 52.193701624757026,
        lng: 20.85985568711877
    },

    {
        id: 2,
        miejscowosc: 'Łódź',
        lat: 51.77512519528888,
        lng: 19.45972488241537
    },

    {
        id: 3,
        miejscowosc: 'Kraków',
        lat: 50.04950070443925,
        lng: 19.94297460105243
    },

    {
        id: 4,
        miejscowosc: 'Wrocław',
        lat: 51.113018262086236,
        lng: 17.011086190967315
    },

    {
        id: 5,
        miejscowosc: 'Gdańsk',
        lat: 54.38165837541231,
        lng: 18.626453948673806
    }
]


const Dostawa = () => {

    const [show, setShow] = React.useState(false)
    const [data, setData] = React.useState(
        {
            id: 0,
            miejscowosc: 'Ozorków',
            lat: 51.95353109257587,
            lng: 19.314444848236644
        }
    );
    

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()

        let indeks = parseInt(e.target.value)

        setData((prevState) => ({
            ...prevState,
            id: dane[indeks].id,
            miejscowosc: dane[indeks].miejscowosc,
            lat: dane[indeks].lat,
            lng: dane[indeks].lng
        }))

        setShow(false)
    }


    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }


    return (
        <>
            <div style={{ marginTop: '100px' }}>
                <h2 className="mainText">Dostawa</h2>
                <div className="underline"></div>
                <div className='container mt-5'>
                    <div style={{fontSize: '30px', fontFamily: 'Caveat, cursive', textAlign: 'center'}}><p>Nasze posiłki dostarczamy w specjalnych termicznych ekologicznych opakowaniach, abyś poczuł prawdziwą głebię smaku. Gwarantujemy satysfakcję z wyboru naszej restauracji oraz dostawę w czasie do 30 minut!</p></div>
                </div>
                
                <div className="obrazek3 text-center mt-5" style={{backgroundImage: `url(${food})`, backgroundPosition:'top', color: 'white'}}>
                <div className="cien3"></div>
                    
                    <p className='pt-4' style={{fontSize:'30px', fontFamily: 'Caveat, cursive'}}>Dania dowozimy na terenie miast dostępnych ponieżej:</p>
                    
                    <form>
                        <label>
                            <p style={{textAlign:'center',marginBottom: `10px`, fontFamily: 'Caveat, cursive', fontSize:'20px'}}>Sprawdź lokalizację: </p>
                            <select style={{backgroundColor: 'transparent', color:'white', fontFamily: 'Caveat, cursive', fontSize: '20px', border: '3px solid #0275d8', appearance: 'none'}} value={data.id} onChange={handleSubmit}>
                                <option style={{backgroundColor: 'black'}} value={dane[0].id}>{dane[0].miejscowosc} (siedziba głowna)</option>
                                <option style={{backgroundColor: 'black'}} value={dane[1].id}>{dane[1].miejscowosc}</option>
                                <option style={{backgroundColor: 'black'}} value={dane[2].id}>{dane[2].miejscowosc}</option>
                                <option style={{backgroundColor: 'black'}} value={dane[3].id}>{dane[3].miejscowosc}</option>
                                <option style={{backgroundColor: 'black'}} value={dane[4].id}>{dane[4].miejscowosc}</option>
                                <option style={{backgroundColor: 'black'}} value={dane[5].id}>{dane[5].miejscowosc}</option>
                            </select>
                        </label>
                        
                    </form>

                        <button className='mapBtn mb-5' onClick={handleClick}>{show ? `Ukryj` : `Pokaż`}</button>
                    
                  </div>
                    

                    {show && <Map isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        mapa={data}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}>

                    </Map>}

                <div style={{marginBottom: '100px'}} className='mt-5'>
                    <div>
                        <p className='dostawaCzcionka' style={{fontSize: '30px', fontWeight:'bold'}}>Dostępne formy odbioru zamówień:</p>
                    </div>
                    <div className="container d-flex justify-content-around mt-3 text-center flex-wrap">
                <div className={`dostawa-box mt-5`}>
                    <p style={{ display: 'block' }}>Odbiór osobisty</p>
                    <hr></hr>
                    <i className="fas fa-store"></i>
                    <hr></hr>
                    <p style={{ display: 'block' }}>Koszt: <span>darmowy</span></p>
                </div>
                <div className={`dostawa-box mt-5`}>
                    <p style={{ display: 'block' }}>Kurier</p>
                    <hr></hr>
                    <i className="fab fa-ups"></i>
                    <i className="fas fa-shipping-fast ml-3"></i>
                    <hr></hr>
                    <p style={{ display: 'block' }}>Koszt: <span>10zł</span></p>
                </div>
                <div className={`dostawa-box mt-5`}>
                    <p style={{ display: 'block' }}>Kurier pobranie</p>
                    <hr></hr>
                    <i className="fab fa-ups"></i>
                    <i className="fas fa-shipping-fast ml-3"></i>
                    <i className="fas fa-dollar-sign ml-3"></i>
                    <hr></hr>
                    <p style={{ display: 'block' }}>Koszt: <span>15zł</span></p>
                </div>

            </div>
            <div className='d-flex justify-content-center align-items-center mt-5 flex-wrap'>
                
                <div><p style={{fontWeight:'bold', fontSize: '20px'}} className='dostawaCzcionka mx-2'>Wysztkie przesyłki kurierskie wysyłamy kurierem UPS</p></div>
                <img style={{objectFit: 'contain'}} className='mt-5' src={dostawa} alt='dostwca'></img>
                
            </div>
            
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Dostawa;
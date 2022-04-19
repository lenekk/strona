import React, {useEffect, useState} from 'react'

import { Card, Button, Spinner, Alert } from 'react-bootstrap'
import SposobDostawy from '../compontents/SposobDostawy'
import CounterBox from '../compontents/CounterBox'

import fish from '../compontents/img/fish.jpg'
import gluten from '../compontents/img/gluten.jpg'
import junior from '../compontents/img/junior.jpg'
import soft from '../compontents/img/soft.jpg'
import standard from '../compontents/img/standard.jpg'
import wege from '../compontents/img/wege.jpg'
import AdresDostawy from './AdresDostawy'
import {db} from '../firebase'

import {useLog} from '../contexts/LogContext'


const Okno = (props) => {

    const {user} = useLog()
    const [loading, setLoading] = useState(false)
    const [wiadomosc, setWiadomosc] = useState()
    const [klasa, setKlasa] = useState('')
    const [variant, setVariant] = useState('success')
    const [isReady, setReady] = useState(false)
    const [sposob, setSposob] = useState('')
    const [selectedCity, setSelectCity] = useState('Ozorków')
    const [userName, setUsername] = useState('')
    const [userSurnName, setSurnName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')


    useEffect(() => {

        if(user){

        const pobierzDane = async () => {

            const baza = await db.collection("users").doc(user.uid);
    
            baza.get().then((doc) => {
                if (doc.exists) {
                    setUsername(doc.data().imie)
                    setSurnName(doc.data().nazwisko)
                    setStreet(doc.data().ulica)
                    setCity(doc.data().miejscowosc)
                    setPhoneNumber(doc.data().numerTelefonu)
                } else {
                    console.log("Brak danych");
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        
        pobierzDane()

    }
    }, [user])


    const anuluj = (e) => {

        setUsername('')
        setSurnName('')
        setPhoneNumber('')
        setStreet('')
        setCity('')

        setReady(!isReady)
    }

    const userNameHandler = (e) => {
        setUsername(e.target.value)
    }

    const userSurnNameHandler = (e) => {
        setSurnName(e.target.value)
    }

    const streetHandler = (e) => {
        setStreet(e.target.value)
    }

    const cityHandler = (e) => {
       
        setCity(e.target.value)
    }

    const cityPicker = (e) => {
        setSelectCity(e.target.value)
    }



    const setReadyHanlder = (e, value) => {
        
        e.preventDefault()

        setSposob(value)
        setReady(!isReady)
        
    }


    const clearCart = () => {

        setUsername('')
        setSurnName('')
        setPhoneNumber('')
        setStreet('')
        setCity('')
        setSelectCity('Ozorków')
        setReady(!isReady)
        props.clearKoszyk()
    }


    const sendToDatabase = () => {

        if(props.dieta.length === 0){
            setWiadomosc('Twój koszyk jest pusty. Zamówienie odrzucone!')
            setVariant('danger')
            return
        }else if(!isReady){
            setWiadomosc('Zatwierdź dane wysyłkowe!')
            setVariant('danger')
            return
        }

        setLoading(true)

        const date = new Date()
        
        let wybor = ''

        if(sposob === 'home'){
            wybor = ("Odbiór osobity w "+selectedCity)
        }else if(sposob === 'kurier'){
            wybor = (city + " " + street)
        }

        if(user){

            db.collection("users").doc(user.uid).collection('zamowienia').add({
                cart: props.dieta,
                date: date,
                adress: wybor,
            })
            .then(() => {
                setLoading(false)
                setWiadomosc('Zamówienie złożone pomyślnie')
                setKlasa('wylaczony')
                setVariant('success')
                clearCart()
            })
            .catch((error) => {
                console.error(error);
            });
        }else{
            db.collection("anonimy").doc().set({
                cart: props.dieta,
                date: date,
                name: userName +" "+ userSurnName,
                adress: wybor,
                phone: phoneNumber,

            })
            .then(() => {
                setLoading(false)
                setWiadomosc('Zamówienie złożone pomyślnie')
                setKlasa('wylaczony')
                setVariant('success')
                clearCart()
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }


    const diety = props.dieta.map((item, index) => {

        let obrazek;

        switch (item.name) {
            case 'fish': obrazek = fish;
                break;

            case 'standard': obrazek = standard;
                break;

            case 'bezglutenowa': obrazek = gluten;
                break;

            case 'junior': obrazek = junior;
                break;

            case 'wege': obrazek = wege;
                break;

            case 'soft': obrazek = soft;
                break;

            default:
                break;
        }

        return (
            <Card key={index} className='cardOkno' style={{ width: '15rem', height: `50%` }}>
                <Card.Img variant="top" src={obrazek} />
                <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                    <Card.Title>Dieta {item.name}</Card.Title>
                    <Card.Text>
                        Cena: {item.price} zł
                    </Card.Text>
                    <Button className='mb-2' onClick={(e) => props.remove(e, index)}>Usuń</Button>
                    <CounterBox removeItem={props.removeItem} dieta={item.count} index={index} count={props.count}></CounterBox>
                </Card.Body>
            </Card>
        )
    })



    return (
        <>
            <div className="okno bg-light">
                <button onClick={props.open} className="exitBtn"><i className="fas fa-times-circle"></i></button>
                <h2 className="mainText">Twój koszyk</h2>
                <div className="underline"></div>
                <div>
                    <p className="product-list">Lista produktów:</p>
                </div>
                <div className='container d-flex justify-content-center flex-wrap'>
                    {props.productsCount === 0 ? <p style={{ fontSize: '25px' }}>Twój koszyk jest pusty</p> : diety}
                </div>

                <div className="mb-5">
                    <p className="product-list mt-4">Sposób dostawy</p>
                    <SposobDostawy isReady={isReady} dostawaH={props.dostawaH} dostawaV={props.dostawaV}></SposobDostawy>
                </div>

                <div className="mb-5">
                    <p className="product-list mt-4">Adres dostawy</p>
                    <AdresDostawy selectedCity={selectedCity} cityPicker={cityPicker} userName={userName} userNameHandler={userNameHandler} userSurnName={userSurnName} userSurnNameHandler={userSurnNameHandler} phoneNumber={phoneNumber} street={street} city={city} anuluj={anuluj} streetHandler={streetHandler} cityHandler={cityHandler} isReady={isReady} setReady={setReadyHanlder} setPhoneNumber={setPhoneNumber} active={props.dostawaV}></AdresDostawy>
                </div>

                
                {!user && <div className='container d-flex justify-content-center'><Alert style={{textAlign:'center', maxWidth:'500px'}} variant='danger'>Kupujesz jako anonim. Historia zamówień będzie niedostępna</Alert></div>}
    
    
                <div className="mb-4">
                    <p className="product-list mt-4">Suma : {props.suma + ' zł'}</p>
                </div> 

                <div className='container d-flex flex-column align-items-center justify-content-center mb-5'>
                    {loading ? <Button variant="danger" disabled>
                                <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                                    Wczytywanie...
                                </Button> : <Button className={klasa + ' w-100'} onClick={sendToDatabase} style={{maxWidth: '250px'}}>Kup Teraz</Button>
                    }
                    {wiadomosc && <Alert className='w-100 text-center mt-3' style={{maxWidth:'400px'}} variant={variant}>{wiadomosc}</Alert>}
                </div>
                
            </div>
        </>
    );
}

export default Okno;
import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Footer from '../compontents/Footer'
import { Button, Spinner, Alert } from 'react-bootstrap'
import {db} from '../firebase'


const Kontakt = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setName] = useState('');
    const [userSurnName, setSurname] = useState('');
    const [email, setEmail] = useState('')
    const [area,setArea] = useState('')

    const[loading,setLoading] = useState(false)
    
    const[message,setMessage] = useState({wiadomosc: '', klasa: ''})

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const userNameHandler = (e) => {
        setName(e.target.value)
    }

    const userSurnNameHandler = (e) => {
        setSurname(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const areaHandler = (e) => {
        setArea(e.target.value)
    }

    const btnHandler = (e) => {
        e.preventDefault()

        setLoading(true)

        db.collection('opinie').doc().set({
            imie: userName,
            nazwisko: userSurnName,
            numer: phoneNumber,
            email: email,
            wiadomosc: area
        }).then(() => {
            console.log('udalo sie');
            setLoading(false)
            setMessage({wiadomosc: 'Opinia wysłana', klasa: 'success'})
        }).catch((err) => {
            console.log(err)
            setLoading(false)
            setMessage({wiadomosc: err, klasa: 'danger'})
        })
    }


    return (
        <>
            <div style={{ marginTop: '100px' }}>
                <h2 className="mainText">Kontakt</h2>
                <div className="underline"></div>
                <div className="container mb-5">


                    <div style={{ marginBottom: `30px` }}>
                        <h4 style={{ marginBottom: `30px`, textAlign: `center` }}>Formularz kontaktowy</h4>

                        <form onSubmit={btnHandler}>

                            <label className='d-flex flex-column justify-contnent-center align-items-center'>
                                <p style={{ textAlign: 'center' }}><strong>Wprowadź swoje dane:</strong></p>
                                <input className='dostawa-input pl-3' style={{textAlignLast: 'left'}} value={userName} onChange={userNameHandler} type='text' placeholder='imię' required></input>
                                <input className='dostawa-input pl-3' style={{textAlignLast: 'left'}} value={userSurnName} onChange={userSurnNameHandler} type='text' placeholder='nazwisko' required></input>
                                <PhoneInput defaultCountry={'PL'} style={{textAlignLast: 'left'}} className='dostawa-input' placeholder='Numer telefonu' value={phoneNumber} required onChange={setPhoneNumber}></PhoneInput>
                                <input className='dostawa-input pl-3' style={{textAlignLast: 'left'}} value={email} onChange={emailHandler} type='email' placeholder='email' required></input>
                                <textarea className="contactArea pl-3" style={{border: '3px solid #343a40'}} placeholder="Twoja wiadomość" value={area} onChange={areaHandler} required></textarea>
                                {loading ? <Button variant='danger' disabled>
                                <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                                    Wczytywanie...
                                </Button> : <Button className={message.klasa+'c'} type='submit'>Wyślij</Button>}
                                {message.wiadomosc && <Alert variant={message.klasa}>{message.wiadomosc}</Alert>}
                            </label>
                        </form>
                    </div>

                </div>
            </div>

            <Footer></Footer>

        </>
    );
}

export default Kontakt;
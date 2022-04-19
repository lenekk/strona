import React, {useRef, useState, useEffect} from 'react';
import firebase from 'firebase/app';
import {db, auth} from '../firebase'
import { useLog } from '../contexts/LogContext';
import { Button, Form, Spinner, Alert } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input'

const ZmianaDanych = (props) => {


    const {user} = useLog()

    const [imie, setImie] = useState('')
    const [nazwisko, setNazwisko] = useState('')
    const [kodPocztowy, setKod] = useState('')
    const [ulica, setUlica] = useState('')
    const [miejscowosc, setMiejscowosc] = useState('')
    const [numer,setNumer] = useState('')

    const [daneLoading, setDaneLoading] = useState(false)
    const [daneInfo, setDaneInfo] = useState({wiadomosc: '', klasa: ''})

    const [hasloLoading, setHasloLoading] = useState(false)
    const [hasloInfo, setHasloInfo] = useState({wiadomosc: '',klasa: ''})

    const aktualneHaslo = useRef()
    const haslo = useRef()
    const powHaslo = useRef()

    useEffect(() => {

        const pobierzDane = async () => {
            const baza = await db.collection("users").doc(user.uid);
    
            baza.get().then((doc) => {
                if (doc.exists) {
                    setImie(doc.data().imie)
                    setNazwisko(doc.data().nazwisko)
                    setUlica(doc.data().ulica)
                    setKod(doc.data().kod)
                    setMiejscowosc(doc.data().miejscowosc)
                    setNumer(doc.data().numerTelefonu)
                } else {
                    console.log("Brak danych");
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        
        pobierzDane()
    }, [user])

    const imieHandler = (e) => {
        setImie(e.target.value)
    }
    const nazwiskoHandler = (e) => {
        setNazwisko(e.target.value)    
    }
    const ulicaHandler = (e) => {
        setUlica(e.target.value)
    }
    const kodHandler = (e) => {
        setKod(e.target.value)
    }
    const miejscowoscHandler = (e) => {
        setMiejscowosc(e.target.value)
    }


    const ustawHaslo = (e) => {
        e.preventDefault()

        setHasloLoading(true)
        
        const stareHaslo = aktualneHaslo.current.value
        const noweHaslo = haslo.current.value
        const powtorzHaslo = powHaslo.current.value

        if(noweHaslo === powtorzHaslo){

        const reAutoryzuj = (stareHaslo) => {
            const user = auth.currentUser;
            const odswiez = firebase.auth.EmailAuthProvider.credential(user.email, stareHaslo);
            return user.reauthenticateWithCredential(odswiez);

          }
         const zmienHaslo = (stareHaslo, noweHaslo) => {
            reAutoryzuj(stareHaslo).then(() => {
              const user = auth.currentUser;
              user.updatePassword(noweHaslo).then(() => {
                setHasloLoading(false)
                setHasloInfo({wiadomosc:'Hasło zmienione', klasa: 'success'})
              }).catch((error) => {
                  if(error.code === 'auth/wrong-password'){
                      error.code = 'Błędne hasło'
                  }
                setHasloInfo({wiadomosc: error.code, klasa: 'danger'})
                setHasloLoading(false)
            });
            }).catch((error) => {
                if(error.code === 'auth/wrong-password'){
                    error.code = 'Błędne hasło'
                }
                setHasloInfo({wiadomosc: error.code, klasa: 'danger'})
                setHasloLoading(false)
        });
          }
          zmienHaslo(stareHaslo, noweHaslo)
        }else{
            setHasloInfo({wiadomosc: 'Hasła nie pasują do siebie', klasa: 'danger'})
            setHasloLoading(false)
        }
}

    const dodajDane = (e) => {

        e.preventDefault()

        setDaneLoading(true)

        db.collection("users").doc(user.uid).set({
            imie: imie,
            nazwisko: nazwisko,
            numerTelefonu: numer,
            ulica: ulica,
            kod: kodPocztowy,
            miejscowosc: miejscowosc
        })
        .then(() => {
            setDaneLoading(false)
            setDaneInfo({wiadomosc:'Zmieniono dane!', klasa: 'success'})
        })
        .catch((error) => {
            console.error({wiadomosc: error.code, klasa: 'danger'});
        });
    }


    return ( <div className='okno bg-light'>
        <button onClick={props.open} className="exitBtn"><i className="fas fa-times-circle"></i></button>
        <h3 className="mainText mt-0">Zmiana Danych</h3>
        <div className='underline mb-5'></div>
        
        <div className='container d-flex justify-content-around flex-wrap'>
            <div>
            <h5 className='text-center mb-4'>Dane użytkownika</h5>
            <Form onSubmit={dodajDane}>
                <Form.Row>
                <Form.Group controlId="formImie">
                    <Form.Label>Wprowadź imię:</Form.Label>
                    <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} value={imie} onChange={imieHandler} type="text" placeholder="Twoje imię" required/>
                </Form.Group>
                <Form.Group controlId="formNazwisko">
                    <Form.Label>Wprowadź nazwisko:</Form.Label>
                    <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} value={nazwisko} onChange={nazwiskoHandler} type="text" placeholder="Twoje Nazwisko" required/>
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group controlId="formUlica">
                    <Form.Label>Twoja ulica:</Form.Label>
                    <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} value={ulica} onChange={ulicaHandler} type="text" placeholder="Ulica" required/>
                </Form.Group>
                </Form.Row>
                
                <Form.Row>
                <Form.Group controlId="formKodpocztowy">
                    <Form.Label>Kod pocztowy:</Form.Label>
                    <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} value={kodPocztowy} onChange={kodHandler} type="text" placeholder="Kod pocztowy" required/>
                </Form.Group>

                <Form.Group controlId="formMiejscowosc">
                    <Form.Label>Miejscowość:</Form.Label>
                    <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px', marginBottom: '1rem'}} value={miejscowosc} onChange={miejscowoscHandler} type="text" placeholder="Podaj miasto" required/>
                </Form.Group>
                </Form.Row>
                <PhoneInput defaultCountry={'PL'} className='dostawa-input' placeholder='numer telefonu' required value={numer} onChange={setNumer}></PhoneInput>
                {daneLoading ? <Button variant='danger' disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                        Wczytywanie...
                    </Button> : <Button type='submit' className={'mt-3 w-100 radius mb-3 ' + daneInfo.klasa+'c'}>Wyślij</Button>}

                {daneInfo.wiadomosc && <Alert className='text-center mt-3' variant={daneInfo.klasa}>{daneInfo.wiadomosc}</Alert>}

            </Form>
            </div>
            <div>
                <h5 className='text-center mb-4'>Zmiana hasła</h5>

                <Form>

                    <Form.Group controlId='formOldHaslo'>
                    <Form.Label>Aktualne hasło:</Form.Label>
                    <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} ref={aktualneHaslo} type="password" placeholder="Aktualne hasło" required/>
                    </Form.Group>
                    
                    <Form.Group controlId='formNewHaslo'>
                    <Form.Label>Nowe hasło:</Form.Label>
                    <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} ref={haslo} type="password" placeholder="Nowe hasło" required/>
                    </Form.Group>
                    
                    <Form.Group controlId='formNewConfirm'>
                    <Form.Label>Potwierdź hasło:</Form.Label>
                    <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} ref={powHaslo} type="password" placeholder="Potwierdź hasło" required/>
                    </Form.Group>
                    
                    {hasloLoading ? <Button variant='danger' disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                        Wczytywanie...
                    </Button> : <Button onClick={ustawHaslo} className={'mt-3 w-100 radius mb-3 ' + hasloInfo.klasa+'c'}>Zatwierdź</Button>}

                    {hasloInfo.wiadomosc && <Alert className='text-center' variant={hasloInfo.klasa}>{hasloInfo.wiadomosc}</Alert>}
                    
                </Form>
            </div>
        </div>

    </div> );
}
 
export default ZmianaDanych;
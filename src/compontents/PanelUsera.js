import React, {useEffect, useState} from "react";
import { useLog } from '../contexts/LogContext'
import { Button } from 'react-bootstrap'
import { db } from "../firebase";
import ZmianaDanych from "./ZmianaDanych";


const PanelUsera = () => {

    const { user } = useLog()
    const [daneUsera, setDaneUsera] = useState()
    const [loading, setLoading] = useState(true)
    const [openOkno, setOpenOkno] = useState(false)

    useEffect(() => {



        const pobierzDane = async () => {
            const dane = await db.collection("users").doc(user.uid);

            dane.get().then((doc) => {
                if (doc.exists) {
                    setDaneUsera(doc.data())
                    setLoading(false)
                }
            }).catch((error) => {
                setLoading(false)
                console.log("Error getting document:", error);
            });
        }
        
        pobierzDane()
    }, [user, openOkno])


    const otworzOkno = (e) => {
        e.preventDefault()
        setOpenOkno(!openOkno)
    }
    

    const zDanymi = <div className='text-center mt-3'><div><strong>Imię:</strong><div>{!loading && daneUsera.imie}</div></div>
        <div><strong>Nazwisko:</strong><div>{!loading && daneUsera.nazwisko}</div></div>
        <div><strong>Adres email:</strong><div>{user.email}</div></div>
        <div><strong>Numer telefonu:</strong><div>{!loading && daneUsera.numerTelefonu}</div></div>
        <div><strong>Ulica:</strong><div>{!loading && daneUsera.ulica}</div></div>
        <div><strong>Kod pocztowy:</strong><div>{!loading && daneUsera.kod}</div></div>
        <div><strong>Miasto:</strong><div>{!loading && daneUsera.miejscowosc}</div></div>
        <Button onClick={otworzOkno} className='mt-4 mb-4'>Zmień Dane</Button>
        </div>

    const bezDanych = <><div><strong>Nie wprowadziłeś jeszcze danych do naszej bazy!</strong></div><Button onClick={otworzOkno} className='mt-4 mb-4'>Wprowadź dane</Button></>

    const druk = daneUsera ? zDanymi : bezDanych

    return (
        <>
            <h2 style={{ marginTop: '100px' }} className="mainText">Panel użytkownika</h2>
            <div className="underline"></div>
            <h5 className='mt-5 mb-4 text-center'>Witaj <span className='text-primary'>{user.email}</span></h5>
            
            <div style={{minHeight: '300px'}} className='container flex-column flex-wrap d-flex border border-secondary justify-content-center align-items-center'>
                {druk}
                {openOkno && <ZmianaDanych open={otworzOkno}></ZmianaDanych>}
            </div>
            
        </>
    );
}

export default PanelUsera;
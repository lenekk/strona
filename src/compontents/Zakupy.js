import React from 'react';
import { useLog } from '../contexts/LogContext'
import { db } from '../firebase'
import Spinner from 'react-bootstrap/Spinner'
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'


const Zakupy = () => {

    const [dane, setDane] = React.useState([])
    const { user } = useLog()
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {

        const getData = async () => {
        const baza = await db.collection('users').doc(user.uid).collection('zamowienia');
        baza.get().then((querySnapshot) => {
            const temp = []
            querySnapshot.forEach((doc) => {
                temp.push({ id: doc.id, ...doc.data() })
            })
            setDane(temp)
            setLoading(false)
        })
    }
        getData()

    }, [user])

    const cart = dane.map((item) => (item.cart))
    const items = cart.map((item, index) => (item.map(i =>
        <ul style={{ listStylePosition: 'inside' }} className="d-flex justify-content-center" key={i.name}>
            <li><strong>{'Dieta ' + i.name}</strong> {' ilość: ' + i.count}</li>
        </ul>)))


    const date = dane.map((item) => item.date.toDate().toLocaleString())


    const zamowienie = dane.map((home, index) => (
        <div className='zamowienia bg-light pb-2' key={home.id}>
            <Accordion>

                <h4>Zamówienie z dnia: </h4>
                {date[index]}

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Podgląd
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>{items[index]}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>))

    const druk = dane.length ? zamowienie : <p style={{ textAlign: 'center' }}><strong>Historia zamówień jest pusta</strong></p>

    return (
        <>
            <h2 style={{ marginTop: '100px' }} className="mainText">Moje zamówienia</h2>
            <div className="underline"></div>
            <div className='container border border-secondary d-flex flex-column justify-content-center'> 

                {loading ? <Spinner className="spinner" animation="border" /> : druk}

            </div>
        </>
    );
}

export default Zakupy;
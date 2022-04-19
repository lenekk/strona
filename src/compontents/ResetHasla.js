import React from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap'
import { useLog } from '../contexts/LogContext';


const ResetHasla = (props) => {

    const resetEmail = React.useRef()
    const {resetHasla} = useLog()
    const [message, setMessage] = React.useState({info:'',klasa:''})
    const [loading,setLoading] = React.useState(false)

    const cofnij = () => {

        props.zamknij()
    }

    const resetHandler = async (e) => {

        e.preventDefault()
        setLoading(true)

        try{
            await resetHasla(resetEmail.current.value)
            setLoading(false)
            setMessage({info:'Link został wysłany',klasa:'success'})
        }catch{
            setLoading(false)
            setMessage({info:'Błędny adres email',klasa:'danger'})
        }

    }

    return (
        <>
        <Form onSubmit={resetHandler}>
            <h4 style={{marginBottom: '20px'}}>Reset hasła</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adres Email</Form.Label>
                <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} type="email" placeholder="Wpisz email" required ref={resetEmail}/>
                <Form.Text className="text-muted">
                    Wyślemy link do zmiany hasła
                </Form.Text>
            </Form.Group>
            <div className='d-flex justify-content-around align-items-center'>
            <div onClick={cofnij} style={{display: "inline"}} className="mr-2 px-0 forgot"><i className="fas fa-chevron-circle-left"></i></div>
            {loading ? <Button variant='danger' disabled>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                    Wczytywanie...
            </Button> : <Button className={message.klasa+'c'} type='submit'>Zmień hasło</Button>}
            </div>
            {message && <Alert className="mt-4 text-center" variant={message.klasa}>{message.info}</Alert>}
        </Form>
        
        </>
    );
}

export default ResetHasla;
import React from 'react';
import { Alert, Button, Form, Spinner} from 'react-bootstrap'
import {useLog} from '../contexts/LogContext'
import ResetHasla from './ResetHasla';


const LoginScreen = (props) => {

    const [err, setErr] = React.useState()
    const [errLogin, setErrLogin]= React.useState()
    const RefEmail = React.useRef()
    const RefHaslo = React.useRef()
    const RefPotwiedz = React.useRef()
    const userLogin = React.useRef()
    const userPass = React.useRef()
    const [loading, setLoading] = React.useState(false)
    const [loadingRegister, setRegister] = React.useState(false)
    const [openForgot, setOpenForgot] = React.useState(false)

    const { signUp, logIn} = useLog();



    const openForgotHandler = () => {

        setOpenForgot(!openForgot)
    }

    const handleLogBtn = async (e) => {
        e.preventDefault()

        setLoading(true)
        
        try {
            setErrLogin('')
            await logIn(userLogin.current.value, userPass.current.value, () => props.click(e))
            setLoading(false)
        }catch{
            setErrLogin('Błędny email lub hasło')
            setLoading(false)
        }

    }

    const handleButton = async (e) => {

        e.preventDefault()
        setRegister(true)
        
        if(RefHaslo.current.value.length < 6){

            setRegister(false)
            return setErr('Hasło zbyt krótkie')
        }
        if(RefHaslo.current.value !== RefPotwiedz.current.value){

            setRegister(false)
            return setErr('Hasła nie są identyczne')
        }
        if(RefEmail.current.value.length<1){

            setRegister(false)
            return setErr('Wpisz poprawny email')
        }
        try{
            setErr('')
            await signUp(RefEmail.current.value,RefHaslo.current.value, () => props.click(e))
            setRegister(false)
        }catch(e){
            setErr(e.message)
            setRegister(false)
        }  
    }

    return ( 
        <>
            <div className='okno bg-light' >
            <button onClick={props.click} className='exitBtn2'><i className='fas fa-times-circle'></i></button>
            <h2 className="mainText">Autoryzacja</h2>
                <div className="underline"></div>
                <div className="logWindow container mt-3 d-flex justify-content-around flex-wrap mt-3">
                <Form>
                    <h4 style={{marginBottom: '20px'}}>Rejestracja</h4>
                    {err && <Alert variant='danger'>{err}</Alert>}
                    <Form.Group controlId="formRegEmail">
                        <Form.Label>Adres email</Form.Label>
                        <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} ref={RefEmail} type="email" placeholder="Wpisz email" required/>
                    </Form.Group>
                    <Form.Group controlId="formRegPassword">
                        <Form.Label>Twoje hasło</Form.Label>
                        <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} ref={RefHaslo} type="password" placeholder="Hasło"  required/>
                    </Form.Group>
                    <Form.Group controlId="formRegConfirm">
                        <Form.Label>Potwierdź hasło</Form.Label>
                        <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} ref={RefPotwiedz} type="password" placeholder="Potwierdź hasło"  required/>
                    </Form.Group>
                   
                    {loadingRegister ? <Button variant='danger' disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                        Wczytywanie...
                    </Button> : <Button style={{marginTop: '15px', marginBottom:'15px'}} onClick={handleButton} >Zarejestruj</Button>}
                </Form>

                <div className='linia'></div>
                {!openForgot ?
                    <Form>
                    <h4 style={{marginBottom: '20px'}}>Logowanie</h4>
                    {errLogin && <Alert variant='danger'>{errLogin}</Alert>}
                    <Form.Group controlId="formLogEmail">
                            <Form.Label>Adres email</Form.Label>
                            <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} ref={userLogin} type="email" placeholder="Wpisz email"/>
                        </Form.Group>
                        <Form.Group controlId="formLogPassword">
                            <Form.Label>Twoje hasło</Form.Label>
                            <Form.Control style={{borderRadius: '15px',border: '3px solid #343a40', height:'50px'}} ref={userPass} type="password" placeholder="Hasło"  />
                        </Form.Group>
                        {loading ? <Button variant='danger' disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                            Wczytywanie...
                        </Button>  : <Button style={{marginTop: '15px'}} onClick={handleLogBtn} >Zaloguj</Button>}
                        <div className='mt-4'>
                            <p>Zapomniałeś hasła? <span onClick={openForgotHandler} className="forgot">Kliknij tutaj</span></p>
                        </div>
                        
                    </Form>
                : <ResetHasla zamknij={openForgotHandler}></ResetHasla>}
                
                </div>
            </div>
        </>
            );
}

            export default LoginScreen;
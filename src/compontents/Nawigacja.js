import {Navbar,Container,Nav} from 'react-bootstrap/'
import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import DropDown from './DropDown'
import LoginScreen from './LoginScreen'
import React from 'react';
import {useLog} from '../contexts/LogContext'

const Nawigacja = () => {

    const {user, logOut} = useLog()

    const ikona = <i className="fas fa-sign-in-alt"></i>
    
    const [open,setOpen] = React.useState(false)

    const LoginHandler = (e) => {
        e.preventDefault()

        setOpen(!open)
        
    }

    const LogOutHandler = async (e) => {
        e.preventDefault()

        try{
            await logOut()
        }catch{
            console.log('blad');
        }

    }

    const btnLogowania = <Button variant="light" className="btnLogIn" onClick={LoginHandler}>{ikona}</Button>

    const btnWylogowania = <DropDown logout={LogOutHandler} userName={user}></DropDown>

    return (
        <div className='stik bg-dark'>
            <div className="container w-100">
            

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand><i className="fas fa-utensils"></i> RestauracjaX</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto my-2 my-lg-0">
                <Nav.Link as={NavLink} eventKey={0} to="/glowna">Główna</Nav.Link>
                <Nav.Link as={NavLink} eventKey={1} to="/menu">Menu</Nav.Link>
                <Nav.Link as={NavLink} eventKey={2} to="/dostawa">Dostawa</Nav.Link>
                <Nav.Link as={NavLink} eventKey={3} to="/kontakt">Kontakt</Nav.Link>
                {user == null ? btnLogowania : btnWylogowania}
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>

            </div>

            {open && <LoginScreen click={LoginHandler}></LoginScreen>}
            
        </div>
    );
}

export default Nawigacja;
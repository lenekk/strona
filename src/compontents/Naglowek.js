import React from 'react';
import background from "./img/churros-2188871_1920.jpg";
import { Button, Nav } from "react-bootstrap"

export default function Header() {


    return (
        <>
            <div className="obrazek" style={{ backgroundImage: `url(${background})`, backgroundSize: `cover` }}>

                <div className="cien"></div>
                <div className="headerText">
                    <h1 className="text-light text-center"> Lorem ipsum dolor sit amet.</h1>
                    <p className="text-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Nav.Item>
                        <Nav.Link href="#onas">
                            <Button variant="light" className="fBtn">Poznaj nas</Button>
                        </Nav.Link>

                    </Nav.Item>

                    <div style={{position: 'absolute',top: '92%'}}>
                        <i style={{animation: 'strzalka 1s infinite'}} className="fas fa-arrow-down text-light"></i>
                    </div>
                </div>


            </div>


        </>
    )
}
import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

import fish from '../compontents/img/fish.jpg'
import gluten from '../compontents/img/gluten.jpg'
import junior from '../compontents/img/junior.jpg'
import soft from '../compontents/img/soft.jpg'
import standard from '../compontents/img/standard.jpg'
import wege from '../compontents/img/wege.jpg'


const MenuPage = (props) => {


  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '80px' }}>
        <div className="container w-100">
          <h2 className="mainText">Menu</h2>
          <div className="underline"></div>
          <div className="row text-center justify-content-center">


            <Card className="ramka" style={{ width: '18rem' }}>
              <div className="bestseller bg-primary">Bestseller</div>
              <Card.Img variant="top" src={standard} />
              <Card.Body>
                <Card.Title>Dieta Standard</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Cena: <span>80zł</span></ListGroupItem>
              </ListGroup>
              <Card.Body>
                <div><Button className="bg-primary text-light font-weight-bold mb-2" onClick={(e) => props.handler(e, { name: 'standard', price: 80, count: 1 })}>Dodaj do koszyka</Button></div>
              </Card.Body>
            </Card>


            <Card className="ramka" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={wege} />
              <Card.Body>
                <Card.Title>Dieta Wege</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Cena: <span>100zł</span></ListGroupItem>
              </ListGroup>
              <Card.Body>
                <div><Button className="bg-primary text-light font-weight-bold mb-2" onClick={(e) => props.handler(e, { name: 'wege', price: 100, count: 1 })}>Dodaj do koszyka</Button></div>
              </Card.Body>
            </Card>

            <Card className="ramka" style={{ width: '18rem' }}>
              <div className="bestseller bg-success">Nowość</div>
              <Card.Img variant="top" src={gluten} />
              <Card.Body>
                <Card.Title>Dieta Bezglutenowa</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Cena: <span>120zł</span></ListGroupItem>
              </ListGroup>
              <Card.Body>
                <div><Button className="bg-primary text-light font-weight-bold mb-2" onClick={(e) => props.handler(e, { name: 'bezglutenowa', price: 120, count: 1 })}>Dodaj do koszyka</Button></div>
              </Card.Body>
            </Card>

            <Card className="ramka" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={soft} />
              <Card.Body>
                <Card.Title>Dieta Soft</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Cena: <span>60zł</span></ListGroupItem>
              </ListGroup>
              <Card.Body>
                <div><Button className="bg-primary text-light font-weight-bold mb-2" onClick={(e) => props.handler(e, { name: 'soft', price: 60, count: 1 })}>Dodaj do koszyka</Button></div>
              </Card.Body>
            </Card>

            <Card className="ramka" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={fish} />
              <Card.Body>
                <Card.Title>Dieta Fish</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Cena: <span>75zł</span></ListGroupItem>
              </ListGroup>
              <Card.Body>
                <div><Button className="bg-primary text-light font-weight-bold mb-2" onClick={(e) => props.handler(e, { name: 'fish', price: 75, count: 1 })}>Dodaj do koszyka</Button></div>
              </Card.Body>
            </Card>

            <Card className="ramka" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={junior} />
              <Card.Body>
                <Card.Title>Dieta Junior</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Cena: <span>50 zł</span></ListGroupItem>
              </ListGroup>
              <Card.Body>
                <div><Button className="bg-primary text-light font-weight-bold mb-2" onClick={(e) => props.handler(e, { name: 'junior', price: 50, count: 1 })}>Dodaj do koszyka</Button></div>
              </Card.Body>
            </Card>




          </div>

        </div>
      </div>
      <div style={{ paddingBottom: '50px' }}></div>

    </>);
}

export default MenuPage;
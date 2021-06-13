import React, { useState, useEffect } from 'react';
import { Link,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col, Row,Navbar,Nav,Button} from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getContactsList } from './ContactListSlice'

import './ContactList.css'


const ContactList = (props) => {
  const dispatch = useDispatch()
  const history = useHistory();

  const { title, id } = props

  const [page, setPage] = useState(1);

  const cards = useSelector((state) => state.contacts.contactCollection)
  const hasMore = useSelector((state) => state.contacts.hasMore)
  useEffect(() => {
    dispatch(getContactsList({ page }))
        setPage(prevState => prevState + 1);

  }, []);

  const fetchContacts = () => {
    
    setPage(prevState => prevState + 1);
      setTimeout(() => {
       if (hasMore) {
      dispatch(getContactsList({ page }))
    }
    }, 1000);
   
  };
  const handleLogout = () => {
    localStorage.clear();
    history.push("/")
  };

  const cardDetails =
    (cards ?
      <InfiniteScroll
        dataLength={cards.length}
        next={fetchContacts}
        hasMore={hasMore}
        loader={<h4 className="cardLoader">Loading...</h4>}
      >{
          <Row>{
            cards.map((card, index) =>
            (
              <Col xl={4} lg={6} md={6} key={index + card.login.uuid}>
                <Card className="box"  >
                    <Card.Body>
                      <div className="cardDiv">
                        <div><img src={card.picture.large !== 'N/A' ? card.picture.large : null} alt={card.login}/></div>
                        <div className="extraDetails">
                          <Card.Title>{card.name.first} {card.name.last}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            <div>
                              <p>Country</p>
                              <p>{card.location.country}</p>
                            </div>
                            <div>
                              <p>City</p>
                              <p>{card.location.city}</p>
                            </div>
                          </Card.Subtitle>
                          
                         
                        </div>
                      </div>
                    </Card.Body>
                  
                </Card>
              </Col>
            )
            )
          }</Row>
        }
      </InfiniteScroll> : <h3>No Record</h3>
    )

  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home"> </Nav.Link>
      </Nav>
        <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
    
    </Navbar>
    <Row className="cardContainer" >{cardDetails}</Row>
  </>
  )
}

export default ContactList
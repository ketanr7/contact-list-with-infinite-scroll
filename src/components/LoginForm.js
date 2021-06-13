import React,{useState} from 'react';
import { Form, Col, Button, InputGroup, Row,Container } from 'react-bootstrap';
import { useHistory,Redirect } from "react-router-dom";

import './LoginForm.css'


const LoginForm = () => {
	const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
	const history = useHistory();
	const [error, setError] = useState(false)
	const { username, password } = inputs;
	const handleChange = e => {
		setError(false)
	        const { name, value } = e.target;
	        setInputs(inputs => ({ ...inputs, [name]: value }));
	    }
    const handleSubmit = e => {
        e.preventDefault();
        // setSubmitted(true);
        if (username !== "foo" || password !== "bar") {
            setError(true)
            return;
        }
        else{
        	 localStorage.setItem('user', JSON.stringify(inputs)); 
        	 history.push("/home");
        }
       
    }
 
	return (
		<Container fluid className="mainContainer">
		    <Row>
			    <Col xs={10} md={6} lg={4} className="formCol">
			    	<Form noValidate onSubmit={handleSubmit} className="formExample">
          				<Row>
          					<h2>Sign in</h2>
            				<Col xs={12}  lg={12} className="proposerForm">
             				<h6 className="note">Note : username is "foo" and password is "bar"</h6>
                
                			<Form.Group as={Col} xs="12" lg="12">
			                  <Form.Label>Username</Form.Label>
			                  <Form.Control
			                    type="text"
			                    placeholder="Username"
			                    name="username"
			                    value={username}
			                    onChange={handleChange}
			                  />
			                </Form.Group>
			                <Form.Group as={Col} xs="12" lg="12">
			                  <Form.Label>Password</Form.Label>
			                  <Form.Control
			                    type="password"
			                    placeholder="Password"
			                    name="password"
			                    value={password}
			                    onChange={handleChange}
			                  />
                  
			                </Form.Group>
			                </Col>
			              </Row>
			              {error &&
			                        <p className="error">Please enter valid details</p>
			                    }
			              <Row>
				            <Col className="buttonContainer">
				              <Button type="submit" className="continueBtn">Sign in</Button>
				            </Col>
				          </Row>
              			</Form>
    				</Col>
  				</Row>
            </Container> 
  );
}

export default LoginForm;
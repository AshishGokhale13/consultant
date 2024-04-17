import React, { useState } from 'react'
import { Form, Button, Container, Row, Col,Card } from 'react-bootstrap';
import './login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
      // Add your login logic here
    };
  return (
    <Container fluid className='vh-100 bg-theme'  >
        <Row className='h-100'>
            <Col xs={12} md={8} className='d-flex h-75  flex-column justify-content-center align-items-center p-3'>
 <h1 className='display-3 fw-bold text-white '>M.B Patil Consultant</h1>
            <p className='h3 text-secondary px-5'>Walking is the perfect way of moving if you want to see into the life of things. It is one way of freedom</p>
            </Col>
            <Col xs={12} md={4} className='d-flex justify-content-center align-items-center px-3 m-0'>
            <Card className="w-100 blur">
            <Card.Body>
            <h3 className='text-center'>Login</h3>
            <Form onSubmit={handleSubmit} className=' w-100 '>
            <Form.Group controlId="formBasicEmail" className='my-2'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className='my-2'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className='my-3'>
            <Button variant="primary" type="submit">
              Login
            </Button>
            </Form.Group>
          </Form>
            </Card.Body>
            </Card>
            </Col>

        </Row>
    </Container>
  )
}

export default Login

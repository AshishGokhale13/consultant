import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import Menu from '../custome/Menu/Menu'
import './admin.css'
import Header from './header/Header'
function Admin() {
  return (
        <>
        <Container fluid>
            <Row className='vh-100 ov-none'>
                <Col md={2} className='p-0 left-side '>
                    <div className='w-100 px-3 py-2 h4 text-primary sticky'>M.B. Patil</div>
                    <div className='sidebar w-100   '>
                        <div className='sidebar text-white'>
                            <Menu/>
                            <Menu/>
                            <Menu/>
                            <Menu/>
                        </div>
                    </div>
                </Col>
                <Col md={10}  className='area-pannel p-0'>
                    <Header/>
                </Col>
            </Row>
        </Container>
        </>
  )
}

export default Admin
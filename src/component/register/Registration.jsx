import React from 'react'
import { Container, Row, Col, Form, Dropdown, Table, Button } from 'react-bootstrap'
import './register.css'
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';


function Registration() {

    const [cast, setCast] = useState('Select an option');
    const [date, setDate] = useState('');
    const [scoreType, setScoreType] = useState('Select an option');
    const [multiSelectCount, setMultiSelectCount] = useState(0);

    const maleInput = useRef(null)
    const femaleInput = useRef(null)

    const [apiData, setApiData] = useState({
        "firstName": "a",
        "middleName": "Doe",
        "lastName": "Smith",
        "motherName": "Mary Smith",
        "dob": "2024-04-06",
        "cast": "XYZ",
        "category": "General",
        "gender": "Male",
        "adhar": 2,
        "mobileNo": 98765432,
        "email": "johnexample.com",
        "address": "123 Street, City",
        "district": "District",
        "pincode": "123456",
        "state": "State",
        "country": "Country",
        "collegeName": "ABC College"
    })


    const saveUser = (e) => {
        e.preventDefault();
        let form = e.target;
        let formdata = new FormData(form);

        axios.post('http://localhost:8080/register', formdata,{headers: {
            'Content-Type': 'multipart/form-data'
          }})
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }




    const isGenderNull = (e) => {

        let status = false;
        if (!maleInput.current.checked && !femaleInput.current.checked)
            status = true;

        let element = e.target;
        if (!status) {

            element.parentElement.parentElement.nextSibling.classList.remove('d-block');
            element.parentElement.parentElement.nextSibling.classList.add('d-none');
        }
        else {
            element.parentElement.parentElement.nextSibling.classList.add('d-block');
            element.parentElement.parentElement.nextSibling.classList.remove('d-none');
            element.parentElement.parentElement.nextSibling.innerHTML = element.parentElement.parentElement.getAttribute("message");
        }

    }
    const isAlpha = (e) => {
        let element = e.target;
        let status, emptyMessage = false;


        if (element.value.length == 0) {
            emptyMessage = true;
            status = true;
        } else if (e.target.value.match(/^[a-zA-Z]*$/)) {
            status = false;
        }
        else {   // console.log(element);
            // console.log(element.getAttribute("message"));
            status = true;
        }

        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }

    const isAlphaNumric = (e) => {
        let element = e.target;
        let status, emptyMessage = false;


        if (element.value.length == 0) {
            emptyMessage = true;
            status = true;
        } else if (e.target.value.match(/^[a-zA-Z0-9]*$/)) {
            status = false;
        }
        else {   // console.log(element);
            // console.log(element.getAttribute("message"));
            status = true;
        }

        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }

    const isDate = (e) => {
        let element = e.target;
        let status, emptyMessage = false;

        if (element.value.length == 0) {
            emptyMessage = true;
            status = true;
        } else if (e.target.value.match(/^\d{4}-\d{2}-\d{2}$/)) {
            status = false;
        }
        else {   // console.log(element);
            // console.log(element.getAttribute("message"));
            status = true;
        }

        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
            setDate(element.value);
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }
    const isEmail = (e) => {
        let element = e.target;
        let status, emptyMessage = false;

        if (element.value.length == 0) {
            emptyMessage = true;
            status = true;
        } else if (e.target.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            status = false;
        }
        else {   // console.log(element);
            // console.log(element.getAttribute("message"));
            status = true;
        }

        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }

    const isNum = (e) => {
        let element = e.target;
        let status, emptyMessage = false;

        if (element.value.length == 0) {
            emptyMessage = true;
            status = true;
        } else if (e.target.value.match(/^[0-9]+$/)) {
            status = false;
        }
        else {
            status = true;
        }
        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }
    const isAdd = (e) => {
        let element = e.target;
        let status, emptyMessage = false;

        if (element.value.length == 0) {
            emptyMessage = true;

            status = true;
        } else if (e.target.value.match(/^[a-zA-Z0-9\s\,\''\-]*$/)) {
            status = false;
        }
        else {
            status = true;
        }
        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }

    const isDecimal = (e) => {
        let element = e.target;
        let status, emptyMessage = false;

        if (element.value.length == 0) {
            emptyMessage = true;

            status = true;
        } else if (e.target.value.match(/^(-?\d*\.?\d+)?$/)) {
            status = false;
        }
        else {
            status = true;
        }
        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }

    const selectedValue = (e) => {
        setCast(eventKe);
        console.log(eventKey);
    }
    const isDropDownEmpty = (e) => {

        let element = e.target;
        let status, emptyMessage = false;
        console.log(element)
        if (element.innerText.includes("Select"))
            status = true
        if (status) {
            element.classList.add('is-valid')
            element.classList.remove('is-invalid')

            element.parentElement.nextSibling.classList.remove('d-none');
            element.parentElement.nextSibling.classList.add('d-block');
            element.parentElement.nextSibling.innerHTML = "this field should not be Empty"

        } else {
            element.classList.remove('is-valid')
            element.classList.add('is-invalid')
            element.parentElement.nextSibling.classList.remove('d-block');
            element.parentElement.nextSibling.classList.add('d-none');
        }
    }



    const handleSelect = (eventKey) => {

        setCast(eventKey);
    };


    const handleScoreType = (eventKey) => {
        setScoreType(eventKey);
    };

    return (
        <>
            <div className='bg-theme py-5'>
                <Container >
                    <Form onSubmit={saveUser} className='text-dark  border rounded-4 bg-transperent px-4 py-5 mb-4 needs-validation'>
                        <h3 className='text-center'>M.B.Patil</h3>
                        <Row>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" name="firstName" message="please Enter valid first name" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                    <Form.Label>Middle Name</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter Middle Name" name="middleName" message="please Enter valid Middle name" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>

                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter Last Name" name="lastName" message="please Enter valid Last name" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Mothers Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Mothers Name" name="motherName" message="please Enter valid Mother name" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Date Of Birth</Form.Label>
                                    <Form.Control type="date" placeholder="Contact No." name="dob" message="please Enter valid Date" onChange={isDate} onBlur={isDate} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Caste</Form.Label>
                                    <Dropdown onSelect={handleSelect} className=''>
                                        <Dropdown.Toggle variant='light' className='w-100' name="cast" id="dropdown-basic" onBlur={isDropDownEmpty}>
                                            {cast}

                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="Select an option">Select an option</Dropdown.Item>
                                            <Dropdown.Item eventKey="Open">Open</Dropdown.Item>
                                            <Dropdown.Item eventKey="OBC">OBC</Dropdown.Item>
                                            <Dropdown.Item eventKey="SBC">SBC</Dropdown.Item>
                                            <Dropdown.Item eventKey="SC">SC</Dropdown.Item>
                                            <Dropdown.Item eventKey="ST">ST</Dropdown.Item>
                                            <Dropdown.Item eventKey="NT-B">NT-B</Dropdown.Item>
                                            <Dropdown.Item eventKey="NT-C">NT-C</Dropdown.Item>
                                            <Dropdown.Item eventKey="NT-D">NT-D</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Category" name="category" message="please Enter valid category" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Label>Gender</Form.Label>
                                <div className='col-md-4 d-flex justify-content-start align-items-center' message="please Select gender type">
                                    <Form.Check
                                        type="radio"
                                        label="Male"
                                        name="gender"
                                        id="male"
                                        value="male"
                                        onBlur={isGenderNull}
                                        ref={maleInput}
                                    />
                                    <Form.Check className='mx-4 col-md-4'
                                        type="radio"
                                        label="Female"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        ref={femaleInput}
                                        onBlur={isGenderNull}
                                    />
                                </div>
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Aadhar No.</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Aadhar No." name="adhar" message="please Enter valid AadharNo." onChange={isNum} onBlur={isNum} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Student Mobile No.</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Student Mobile No" name="mobileno" message="please Enter valid phoneNo." onChange={isNum} onBlur={isNum} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Parents Mobile No.</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Parents Mobile No" name="parentMobileno" message="please Enter valid phoneNo." onChange={isNum} onBlur={isNum} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" name="email" message="please Enter valid email" onChange={isEmail} onBlur={isEmail} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter Address" name="address" message="please Enter valid address" onChange={isAdd} onBlur={isEmail} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" name="city" message="please Enter valid City" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>District</Form.Label>
                                    <Form.Control type="text" placeholder="Enter District" name="district" message="please Enter valid District" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>

                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Pincode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Pincode" name="pincode" message="please Enter valid Pincode" onChange={isNum} onBlur={isNum} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="Enter State" name="state" message="please Enter valid State" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Country" name="country" message="please Enter valid Country" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name of College</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name of College" name="collegeName" message="please Enter valid College Name" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-4'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Students Photo</Form.Label>
                                    <Form.Control type="file" placeholder="Contact No." name="profile" message="please import proper file" onChange={isAlpha} onBlur={isAlpha} />
                                    <div className='invalid-feedback d-none'>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <h4>Details of all ENTERANCE Exam successfully qualified/passed</h4>
                        </Row>
                        <Row>
                            <Col className='col-md-12'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Class/Grade</th>
                                                <th>Application Number</th>
                                                <th>Roll No.</th>
                                                <th>Year of Passing</th>
                                                <th>Marks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                                        <Dropdown onSelect={handleScoreType} onBlur={isDropDownEmpty} onChange={isDropDownEmpty} className=''>
                                                            <Dropdown.Toggle variant='light' className='w-100' name='scoreType' id="dropdown-basic2" >
                                                                {scoreType}
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item eventKey="Select an option">Select an option</Dropdown.Item>
                                                                <Dropdown.Item eventKey="JEEE">JEEE</Dropdown.Item>
                                                                <Dropdown.Item eventKey="GRADE">GRADE</Dropdown.Item>  </Dropdown.Menu>
                                                        </Dropdown>
                                                        <div className='invalid-feedback d-none'>
                                                        </div>
                                                    </Form.Group>
                                                </td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Control type="text" onChange={isAlphaNumric} onBlur={isAlphaNumric} name='applicationNumber' message="value should be contain number and Aplphabets only" placeholder="Enter Application Number" />
                                                        <div className='invalid-feedback d-none'>
                                                        </div>
                                                    </Form.Group>

                                                </td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Control type="text" placeholder="Enter Roll No." onBlur={isAlphaNumric} name='rollNo' onChange={isAlphaNumric} message="value should be contain number and Aplphabets only" />
                                                        <div className='invalid-feedback d-none'>
                                                        </div>
                                                    </Form.Group>

                                                </td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Control type="text" placeholder="Enter Year of Passing" onBlur={isNum} onChange={isNum} name="year" message="value should be contain numbers only" />
                                                        <div className='invalid-feedback d-none'>
                                                        </div>
                                                    </Form.Group>

                                                </td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Control type="text" onChange={isDecimal} onBlur={isDecimal} placeholder="Enter Marks" name='marks' message="it accepts only Decimal Number" />
                                                        <div className='invalid-feedback d-none'>
                                                        </div>
                                                    </Form.Group>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </Table>

                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className='d-flex justify-content-center align-items-center'>
                                <input type='hidden' value={cast} name='cast' />
                              
                                <Button variant="primary" type="submit" >Submit</Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </Container >
            </div>
        </>
    )
}

export default Registration
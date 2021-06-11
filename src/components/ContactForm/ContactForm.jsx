import React, { useContext } from 'react'
import { Form, Button, Col } from 'react-bootstrap';

import ThemeContext from '../../theme-context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css'

function ContactForm() {
    const theme = useContext(ThemeContext);

    return (
        <div  >
            <Form style={theme} className="contact-form mb-5 mr-3" >
                <Col style={theme}>
                    <h4>Contact Me</h4>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="form-input" type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="form-input" type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="form-input" type="email" placeholder="Email" />
                    </Form.Group>
                    <Button id="button">Submit</Button>
                </Col>
            </Form>
        </div>
    )
}

export default ContactForm;

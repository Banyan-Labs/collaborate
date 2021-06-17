import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
  return (
    <div>
      <Form>
        <Col>
          <p>"Want to get in touch?"</p>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='G.I. Jane' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='name@example.com' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Message</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <Button variant='primary'>Submit</Button>
        </Col>
      </Form>
    </div>
  );
}

export default ContactForm;

import React, { useState } from 'react';
import {
  Card,
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import styled from "styled-components"

const ContactMe = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      alert("This component is currently unable to send emails. Please email me directly at bryancaesar42@gmail.com");
    }
    else {
      // handle invalid form
    }

    setValidated(true);
  };

  return (
    <StyledCard id="contact" bg="secondary" text="light" className='mx-auto'>
      <Card.Header as="h2" className="text-center">
        Contact Me
      </Card.Header>

      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Your Name"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="youremail@example.com"
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter your email address
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Your message"
              required
            />
          </Form.Group>

          <Button type="submit" className="mx-auto">Submit</Button>
        </Form>
      </Card.Body>
    </StyledCard>
  );
};

export default ContactMe;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 40rem;
`;
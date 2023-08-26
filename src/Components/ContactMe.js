import React, { useState } from 'react';
import {
  Card,
  Button,
  Form
} from 'react-bootstrap';
import styled from "styled-components"

const ContactMe = () => {
  const [validName, setValidName] = useState(null);
  const [validEmail, setValidEmail] = useState(null);
  const [validSubject, setValidSubject] = useState(null);
  const [validMessage, setValidMessage] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formIsValid = validName && validEmail && validSubject && validMessage;

  const handleInputBoxChange = (event, handleInput, handleValidationChange) => {
    const inputBox = event.currentTarget;

    handleInput(inputBox.value);

    const isValid = inputBox.checkValidity();
    handleValidationChange(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO
  };

  return (
    <StyledCard id="contact" bg="secondary" text="light" className='mx-auto'>
      <Card.Header as="h2" className="text-center">
        Contact Me
      </Card.Header>

      <Card.Body>
        <Form noValidate validated={formIsValid} onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              required
              isValid={validName}
              isInvalid={validName === false}
              onChange={e => handleInputBoxChange(e, setName, setValidName)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="youremail@example.com"
              required
              isValid={validEmail}
              isInvalid={validEmail === false}
              onChange={e => handleInputBoxChange(e, setEmail, setValidEmail)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              required
              isValid={validSubject}
              isInvalid={validSubject === false}
              onChange={e => handleInputBoxChange(e, setSubject, setValidSubject)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Your message"
              required
              isValid={validMessage}
              isInvalid={validMessage === false}
              onChange={e => handleInputBoxChange(e, setMessage, setValidMessage)}
            />
          </Form.Group>

          <Button type="submit" className="mx-auto" disabled={!formIsValid}>Submit</Button>
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
import React, { useState } from 'react';
import {
  Card,
  Button,
  Form
} from 'react-bootstrap';
import styled, { css } from 'styled-components';

const apiEndpoint = "https://api.bryancaesar.com/ContactMe";
const errorAlert = "Error - An error occurred. Please try again or email me at bryancaesar42@gmail.com";

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formIsValid) {
      const requestBody = {
        "name": name,
        "email": email,
        "subject": subject,
        "message": message
      };

      const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      };

      try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();

        if (data.success) {
          alert("Success - Thank you for contacting me! I'll get back to you shortly.");
        }
        else {
          alert(errorAlert);
        }
      }
      catch (error) {
        alert(errorAlert);
      }
    }
    else {
      alert("Unable to submit because the form is missing required data or contains an invalid value. Please double-check your inputs and try again.");
    }
  };

  return (
    <SectionWrapper id="contact">
      <StyledCard bg="dark3" text="primary">
        <Card.Header as="h1" className="text-center">
          Contact Me
        </Card.Header>

        <Card.Body>
          <Form noValidate validated={formIsValid} onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Name</Form.Label>
              <StyledTextInput
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
              <StyledTextInput
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
              <StyledTextInput
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
                as={StyledTextArea}
                rows={4}
                placeholder="Your message"
                required
                isValid={validMessage}
                isInvalid={validMessage === false}
                onChange={e => handleInputBoxChange(e, setMessage, setValidMessage)}
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button type="submit" disabled={!formIsValid}>Submit</Button>
            </div>
          </Form>
        </Card.Body>
      </StyledCard>
    </SectionWrapper>
  );
};

export default ContactMe;

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.dark || 'black'};
  padding: ${props => props.theme.sectionPadding || '50px'};
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 40rem;
  border-color: ${props => props.theme.primary || 'black'};
`;

const InputBoxStyles = css`
  background-color: ${props => props.theme.dark || 'grey'};
  color: ${props => props.theme.light || 'white'};

  &::placeholder { // Chrome, Firefox, Opera, Safari 10.1+
    color: ${props => props.theme.light || 'white'};
    opacity: 1; // Firefox
  }

  &::-ms-input-placeholder { // Microsoft Edge
    color: ${props => props.theme.light || 'white'};
  }

  &:-ms-input-placeholder { // Internet Explorer 10-11
    color: ${props => props.theme.light || 'white'};
  }
`;

const StyledTextInput = styled(Form.Control)`
  ${InputBoxStyles}
`;

const StyledTextArea = styled.textarea`
  ${InputBoxStyles}
`;
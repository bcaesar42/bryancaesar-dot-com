import {
  Row,
  Col,
  Image,
  Card
} from "react-bootstrap";
import styled from "styled-components"
import ProfilePic from "./../Assets/ProfilePic_May2023.jpg"

const AboutMe = () => {
  return (
    <Row xs={1} md={2} className="align-items-center">
      <StyledCol className="justify-content-md-end">
        <StyledImage fluid rounded src={ProfilePic} />
      </StyledCol>

      <StyledCol className="justify-content-md-start">
        <StyledCard id="about" bg="secondary" text="light" className="my-3">
          <Card.Header as="h2" className="text-center">
            About Me
          </Card.Header>

          <Card.Body>
            <Card.Text>
              I'm a full-stack software engineer based in Cheney, WA.
              I specialize in web applications, .NET, and AWS.
            </Card.Text>

            <Card.Text>
              During my time in the software industry, I was often one of only 3 engineers at a given company.
              Therefore, I have honed a truly full-stack skill set.
            </Card.Text>
          </Card.Body>
        </StyledCard>
      </StyledCol>
    </Row>
  );
};

export default AboutMe;

const StyledCol = styled(Col).attrs({
  className: "d-flex justify-content-center"
})`
  /* CSS */
`;

const StyledImage = styled(Image)`
  max-height: 650px;
`;

const StyledCard = styled(Card)`
  max-width: 40rem;
`;
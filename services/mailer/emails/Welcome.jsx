import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const WelcomeEmail = () => {
  return (

    <Html>
      <Head />
      <Preview>You're now ready to make Appointments!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src={`https://www.collinsdictionary.com/images/full/medicine_524556844_1000.jpg`}
              width="49"
              height="21"
              alt="Simple HMS"
              style={{objectFit: 'cover'}}
            />
            <Hr style={hr} />
            <Text style={paragraph}>
              Thanks for submitting your registering on our system.
            </Text>
            <Text style={paragraph}>
              You can now make Appointments with your doctor.
            </Text>
            <Button style={button} href="https://dashboard.stripe.com/login">
              View your Dashboard
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  )
};

export default WelcomeEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};

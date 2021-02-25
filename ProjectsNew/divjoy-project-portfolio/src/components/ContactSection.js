import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Contact from "./Contact";

function ContactSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container
        style={{
          maxWidth: "850px",
          backgroundColor:"rgba(255, 255, 255, 0.3", 
          backdropFilter: "blur(2px)", 
          border: "rgba(255, 255, 255, 0.4) 1px solid", 
          padding:"36px", 
          boxShadow:"2px 10px 10px rgba(0, 0, 0, 0.4)"
        }}
      >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Contact
          showNameField={props.showNameField}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
          inputSize={props.inputSize}
        />
      </Container>
    </Section>
  );
}

export default ContactSection;

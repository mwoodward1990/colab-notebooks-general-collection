import React from "react";
import "./SectionHeader.scss";
//animations
import Fade from 'react-reveal/Fade';

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <header
      className={
        "SectionHeader" + (props.className ? ` ${props.className}` : "")
      }
    >

      {props.title && (
        <Fade
          bottom
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1
          className={
            "font-weight-bold" +
            (props.subtitle && props.spaced ? " mb-4" : "") +
            (!props.subtitle ? " mb-0" : "") +
            (props.size ? ` h${props.size}` : "")
          }
          >
            {props.title}
          </h1>
        </Fade>
      )}

      {props.features && (
        <Fade
          bottom
          duration={1200}
          delay={700}
          distance="30px"
        >
          <p className="SectionHeader__subtitle mb-0">{props.features}</p>
        </Fade>
      )}

      {props.subtitle && (
        <Fade
          bottom
          duration={1200}
          delay={700}
          distance="30px"
        >
          <p className="SectionHeader__subtitle mb-0">{props.subtitle}</p>
        </Fade>
      )}

      {props.subtitle2 && (
        <Fade
          bottom
          duration={1200}
          delay={700}
          distance="30px"
        >
          <p className="SectionHeader__subtitle mb-0">{props.subtitle2}</p>
        </Fade>
      )}

      {props.description && (
        <Fade
          bottom
          duration={1200}
          delay={700}
          distance="30px"
        >
          <p>{props.description}</p>
        </Fade>
      )}
    </header>
  );
}

export default SectionHeader;

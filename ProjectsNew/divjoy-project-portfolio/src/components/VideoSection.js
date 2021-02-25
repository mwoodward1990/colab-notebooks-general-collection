import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Image from "react-bootstrap/Image";
// import logos
import GithubLivePreviewIcons from "./GithubLivePreviewIcons";

const boxShadow = { boxShadow:'4px 10px 10px gray' }
function VideoSection(props) {
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
          maxWidth: "768px",
        }}
      >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        { props.embedUrl && 
          <Image src={props.embedUrl} alt={props.title} fluid={true} style={boxShadow} />
        }
        { !props.embedUrl && 
          <Image src={props.imgSrc} alt={props.title} fluid={true} style={boxShadow} />
        }
        <div style={{marginTop:'36px', marginBottom:'-50px', marginRight:'36px', float:'right'}}>
          <GithubLivePreviewIcons url={props.url} repo={props.repo} />
        </div>
      </Container>
    </Section>
  );
}

export default VideoSection;
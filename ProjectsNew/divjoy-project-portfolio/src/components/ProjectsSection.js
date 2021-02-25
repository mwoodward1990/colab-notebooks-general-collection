import React from 'react';

// Import styling libraries
import { Card, Row } from 'reactstrap'
import styled from 'styled-components'

import { GoMarkGithub } from 'react-icons/go';
import { MdOpenInNew } from 'react-icons/md';
import { data } from '../data/data';

export default function Grid() {

  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    justify-content: center;
    padding: 0 20px 0 30px;
  `;

  const CardStyles = { 
    border: '2px solid lightGray',
    padding: '15px',
    width: "300px", 
    height: 'auto'
    }
  return(
      <Wrapper>
        {data.map((project, index) => (
          <Card key={index} style={CardStyles}>
            <h1>{project.title}</h1>
            <h3>{project.author}</h3>
            <img width="100%" src={project.img} alt={project.alt} />
            <p>{project.caption}</p>
            <p>
              <b>Status: </b>
              <small style={{color:'red'}}>{project.status}</small>
            </p>
            <div>
              <p>{project.description}</p>    
              <Row>
                <a href={project.link} target="blank" style={{float:'right',color:'black'}}>
                  Live Example <MdOpenInNew />
                </a>
                <a href={project.github} target="blank" style={{float:'right', color:'black'}}>
                  Source <GoMarkGithub />
                </a>
              </Row>
            </div>
          </Card>
        ))}
      </Wrapper>
  )
}
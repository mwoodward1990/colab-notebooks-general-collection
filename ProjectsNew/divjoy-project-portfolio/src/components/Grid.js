import React from 'react';
// Import styling libraries
import { Card } from 'reactstrap'
import styled from 'styled-components'
//utilities
import { useRouter } from "../util/router";
//animations
import { motion } from 'framer-motion';

export default function Grid(props) {
  const router = useRouter();
  const isAllProjectsType = router.query.type.toLowerCase();

  function handleClick(e, item_id) {
    e.preventDefault();
    if (item_id === "projects") {
      router.push({
        pathname: "/"+item_id
      })
    } else {
      router.push({
        pathname: "/project/"+item_id,
        state: {
          id: item_id
        }
      });
    }
  }
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
    grid-gap: 20px;
    justify-content: center;
  `;

  const CardStyles = { 
    width: 'auto', 
    height: 'auto',
    alignItems:'center',
    padding:'20px 0 20px 0',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(3px)',
    border: "rgba(255, 255, 255, 0.4) 1px solid", 
    boxShadow:"2px 10px 10px rgba(0, 0, 0, 0.4)",
    cursor:'pointer'
    }
  return(
      <Wrapper>
        {isAllProjectsType === "all" ? 
          props.data.map((project, index) => (
            <Card 
              key={index} 
              style={CardStyles} 
              onClick={(e) => handleClick(e, project.id)}
            >
              <h3>{project.title}</h3>
              <motion.img 
                src={project.img} 
                alt={project.alt} 
                style={{
                  opacity:'1',
                  width:'200px',
                  zIndex:'60',
                  boxShadow:"2px 10px 10px rgba(0, 0, 0, 0.4)",
                  cursor:'pointer'
                  }}
                whileHover={{ scale: 1.1 }}
              />
            </Card>
          )) :
            props.data
            .filter(project => 
              project.label === props.label || 
              project.label[0] === props.label || 
              project.label[1] === props.label
            )
            .map((project, index) => (
              <Card 
                key={index} 
                style={CardStyles} 
                onClick={(e) => handleClick(e, project.id)}
              >
                <h3>{project.title}</h3>
                <img src={project.img} alt={project.alt} 
                  style={{
                    opacity:'1',
                    width:'200px',
                    zIndex:'60'
                    }}
                />
              </Card>
            ))}
      </Wrapper>
  )
}
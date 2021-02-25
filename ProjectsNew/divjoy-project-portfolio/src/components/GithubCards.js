import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { GoStar, GoRepoForked } from "react-icons/go";

function GithubCards(props) {
  const styles = {
    fontFamily:'Georgia',
    color:' #116cd7'
  };
  const cardStyle = {
    padding:'10px'
  };
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={6} lg={3} className="py-3" key={index}>
            <Card as="a" text="dark">
              <div style={cardStyle}>
                <a href={item.html_url} target="blank" className="text-decoration-none">
                  <Card.Title><h5 style={styles}>{item.name}</h5></Card.Title>
                </a>
                <Card.Text><small><p>{item.description}</p></small></Card.Text>
              </div>
              <Card.Body>
                <div style={{float:'right'}}>
                  <span><GoStar /> {item.stargazers_count}</span>
                  <span><GoRepoForked /> {item.forks_count}</span>
                </div>
              </Card.Body>
            </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GithubCards;

import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CardDetails = ({ show }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Card style={{width:"25rem",background:'transparent',border:"0.3rem solid #104d75",margin:"1rem",overflow:"hidden"}} className=" rounded" data-aos="fade-down">
        <LinkContainer to={`/show/${show.show.id}`}>
          <div style={{width:"100%"}} >
            <Card.Img
              variant="top"
              src={show.show.image.medium}
              style={{ objectFit: "cover" }}
              fluid="true"
              className="image"
            />
          </div>
        </LinkContainer>
      </Card>
   </>
  );
};
export default CardDetails;

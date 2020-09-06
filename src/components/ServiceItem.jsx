import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Container } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";

import "./ServiceItem.scss";

const ServiceItem = ({
  titoloeventi,
  titolodisco,
  titolomatri,
  testoeventi,
  testodisco,
  testomatri,
}) => {
  const data = useStaticQuery(graphql`
    {
      matrimoni: file(relativePath: { eq: "assets/images/matrimoni.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      eventi: file(relativePath: { eq: "assets/images/eventi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      discoteche: file(relativePath: { eq: "assets/images/discoteca.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Container>
      <Row className="mt-5">
        <Col
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1500"
          xs={12}
          md={6}
        >
          <Img alt="alt" fluid={data.eventi.childImageSharp.fluid} />
        </Col>
        <Col
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1500"
          xs={12}
          md={6}
        >
          <h4 className="titolo-img">{titoloeventi}</h4>
          <p>{testoeventi}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1500"
          xs={12}
          md={(6, { order: "last" })}
        >
          <Img alt="alt" fluid={data.matrimoni.childImageSharp.fluid} />
        </Col>
        <Col
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1500"
          xs={12}
          md={6}
        >
          <h4 className="titolo-img">{titolomatri}</h4>
          <p>{testomatri}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1500"
          xs={12}
          md={6}
        >
          <Img alt="alt" fluid={data.discoteche.childImageSharp.fluid} />
        </Col>
        <Col
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1500"
          xs={12}
          md={6}
        >
          <h4 className="titolo-img">{titolodisco}</h4>
          <p>{testodisco}</p>
        </Col>
      </Row>
    </Container>
  );
};

ServiceItem.propTypes = {
  titolodisco: PropTypes.string,
  titoloeventi: PropTypes.string,
  titolomatri: PropTypes.string,
  testodisco: PropTypes.string,
  testoeventi: PropTypes.string,
  testomatri: PropTypes.string,
};

ServiceItem.defaultProps = {
  titolodisco: "",
  titoloeventi: "",
  titolomatri: "",
  testodisco: PropTypes.string,
  testoeventi: PropTypes.string,
  testomatri: PropTypes.string,
};

export default ServiceItem;

import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import "./ImageCard.scss";

const ImageCard = ({ className, imageAlt, header, subheader, extraInfo, children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "assets/images/head-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <Img
        objectFit="cover"
        objectPosition="20% 10%"
        className="image"
        fluid={data.file.childImageSharp.fluid}
        alt={imageAlt || header || subheader}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, rgba(0,0,0, 0.6),rgba(0,0,0, 0)",
        }}
      >
        <Container
          style={{
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <h1 className="intro-heading text-uppercase">{header}</h1>
          <h3 className="my-0 py-3">{subheader}</h3>
          {extraInfo}
          {children}
        </Container>
      </div>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
  children: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
  children: null,
};

export default ImageCard;

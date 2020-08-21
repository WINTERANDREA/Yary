import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Image from "components/Image";
import Img from "gatsby-image/withIEPolyfill";
import "./ImageCard.scss";

const ImageCard = ({
  className,
  imageFileName,
  imageAlt,
  header,
  subheader,
  extraInfo,
  children,
}) => {
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
        objectPosition="30% 70%"
        className="image"
        fluid={data.file.childImageSharp.fluid}
        alt={imageAlt || header || subheader}
      />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-heading text-uppercase">{header}</div>
            {extraInfo}
            {children}
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
  children: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
  children: null,
};

export default ImageCard;

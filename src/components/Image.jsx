import React from "react";
import PropTypes from "prop-types";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";

const Image = ({ fileName, alt, objectPosition, objectFit, ...restProps }) => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(fileName));

      if (!image) {
        return null;
      }

      const imageSizes = image.node.childImageSharp.fluid;
      return (
        <Img
          objectPosition={objectPosition}
          objectFit={objectFit}
          style={{ objectPosition: "left" }}
          alt={alt}
          fluid={imageSizes}
          {...restProps}
        />
      );
    }}
  />
);

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string,
  objectPosition: PropTypes.string,
  objectFit: PropTypes.string,
};

Image.defaultProps = {
  alt: null,
  objectPosition: "center",
  objectFit: "cover",
};

export default Image;

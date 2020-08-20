import React from "react";
import PropTypes from "prop-types";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";

const Image = ({ fileName, alt, objectPosition, ...restProps }) => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1920) {
                  ...GatsbyImageSharpSizes
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

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <Img
          objectPosition={objectPosition}
          style={{ objectPosition: "left" }}
          alt={alt}
          sizes={imageSizes}
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
};

Image.defaultProps = {
  alt: null,
  objectPosition: "center",
};

export default Image;

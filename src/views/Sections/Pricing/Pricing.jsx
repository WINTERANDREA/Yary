import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Card, Container } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import { graphql, useStaticQuery } from "gatsby";
import "./Pricing.scss";
import Img from "gatsby-image/withIEPolyfill";
import { none } from "ramda";

const Pricing = ({ className, frontmatter }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "assets/images/highway.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <section
      className={clsx("Pricing-section", className)}
      style={{ background: "#212529" }}
      id={anchor}
    >
      <Card className={clsx("image-card bg-dark text-white text-center", className)}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="pricing"
          objectFit="cover"
          objectPosition="20% 10%"
          className="image"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,.2)",
          }}
        >
          <Container>
            <div className="pricing-text">
              <SectionHeader
                style={{ color: "#fed136", marginTop: 30 }}
                header={rootHeader}
                subheader={rootSubHeader}
              />
              <div style={{ marginTop: 50 }}>
                <h3>Milano - Bergamo | 60 Minuti | 150€</h3>
                <h3>Milano - Malpensa| 45 Minuti | 90€</h3>
                <h3>Milano - Linate | 30 Minuti | 75€</h3>
                <h3>Milano - Roma| 5 Ore | 900€</h3>
                <h3>Milano - Napoli| 8 Ore | 1800€</h3>
              </div>
            </div>
          </Container>
        </div>
      </Card>
    </section>
  );
};

Pricing.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Pricing.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Pricing;

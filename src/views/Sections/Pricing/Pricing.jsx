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
import TableRoutes from "components/TableRoutes";

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

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    Route,
    Price,
    Duration,
    Disclaimer,
    HeadText,
    HeadDescription,
  } = frontmatter;

  return (
    <section
      className={clsx("Pricing-section", className)}
      style={{ background: "#212529" }}
      id={anchor}
    >
      <Card
        className={clsx("image-card image-card-pricing bg-dark text-white text-center", className)}
      >
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
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <div className="pricing-text">
              <SectionHeader
                className="header-pricing"
                header={rootHeader}
                subheader={rootSubHeader}
              />
              <div style={{ marginTop: 50 }}>
                <TableRoutes
                  Route={Route}
                  Duration={Duration}
                  Price={Price}
                  Disclaimer={Disclaimer}
                />
                <h4 style={{ marginTop: 60 }}>{HeadText}</h4>
                <p>{HeadDescription}</p>
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

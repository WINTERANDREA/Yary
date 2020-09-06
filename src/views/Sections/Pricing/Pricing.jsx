import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";

import { graphql, useStaticQuery } from "gatsby";
import "./Pricing.scss";
import TableRoutes from "components/TableRoutes";
import BackgroundImg from "components/BackgroundImg";

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
      <BackgroundImg
        containerStyle={{ padding: "80px 0" }}
        bgLayer="rgba(0,0,0,.2)"
        bgImage={data.file.childImageSharp.fluid}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "white",
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
      </BackgroundImg>
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

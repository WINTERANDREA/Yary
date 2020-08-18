import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Pricing.scss";

const Pricing = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <PageSection className={clsx("Pricing-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <div style={{ fontSize: 50, color: "black" }}>CIAOOO</div>
    </PageSection>
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

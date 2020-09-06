import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    titoloeventi,
    titolodisco,
    titolomatri,
    testoeventi,
    testodisco,
    testomatri,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <ServiceItem
        titoloeventi={titoloeventi}
        titolodisco={titolodisco}
        titolomatri={titolomatri}
        testoeventi={testoeventi}
        testodisco={testodisco}
        testomatri={testomatri}
      />
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;

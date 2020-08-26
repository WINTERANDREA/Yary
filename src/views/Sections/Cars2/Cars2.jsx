import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Car from "components/Car";
import "./Cars2.scss";

const Cars2 = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, cars2 } = frontmatter;

  return (
    <PageSection className={clsx("cars2-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Container className="text-center mt-5" style={{ position: "relative" }}>
        <Row>
          {cars2.map(
            ({
              imageFileName,
              imageAlt,
              carName,
              seats,
              numberOfSeats,
              price,
              amount,
              luggage,
              numberOfLuggage,
              detailButton,
            }) => (
              <Col key={carName} xs={12} lg={4} xl={4} className="mt-5 mt-sm-0">
                <Car
                  fluid={imageFileName}
                  alt={imageAlt}
                  carName={carName}
                  seats={seats}
                  numberOfSeats={numberOfSeats}
                  price={price}
                  amount={amount}
                  luggage={luggage}
                  numberOfLuggage={numberOfLuggage}
                  detailButton={detailButton}
                />
              </Col>
            ),
          )}
        </Row>
      </Container>
    </PageSection>
  );
};

Cars2.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Cars2.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Cars2;

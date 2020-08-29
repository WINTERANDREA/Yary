import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";
import IconCallSet from "components/IconCallSet";

import "./Top.scss";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    header,
    subheader,
    jumpToAnchor,
    jumpToAnchorText,
    telefono,
    whatsapp,
    telegram,
  } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const icon = <IconCallSet telefono={telefono} whatsapp={whatsapp} telegram={telegram} />;
  return (
    <>
      <ImageCard header={header} subheader={subheader} extraInfo={icon} />
    </>
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;

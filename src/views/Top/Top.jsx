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

  const { header, subheader, imageFileName, jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <Button size="xl" variant="primary" className="text-uppercase button">
        {jumpToAnchorText}
        <IconCallSet />
      </Button>
    );
  }

  return (
    <>
      <ImageCard
        imageFileName={imageFileName}
        header={header}
        subheader={subheader}
        extraInfo={extraInfoPart}
      />
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

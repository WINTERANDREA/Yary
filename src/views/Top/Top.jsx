import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";
import Image from "components/Image";

import "./Top.scss";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
        {jumpToAnchorText}
      </Button>
    );
  }

  return (
    <>
      <Image
        style={{ zIndex: 100, width: 80, position: "absolute", right: 20, bottom: 20 }}
        fileName="whatsapp.png"
        alt="file"
      />
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

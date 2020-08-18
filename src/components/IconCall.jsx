import React from "react";
import PropTypes from "prop-types";
import Image from "components/Image";

import "./IconCall.scss";

const IconCall = ({ href, iconCallName }) => (
  <span itemProp="telephone">
    <a
      className="icon-call"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={iconCallName}
    >
      <Image fileName={iconCallName} className="icon-call_image" />
    </a>
  </span>
);

IconCall.propTypes = {
  href: PropTypes.string,
  iconCallName: PropTypes.string,
};

IconCall.defaultProps = {
  href: "",
  iconCallName: null,
};

export default IconCall;

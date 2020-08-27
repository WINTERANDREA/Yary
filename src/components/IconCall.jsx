import React from "react";
import PropTypes from "prop-types";
import Image from "components/Image";

import "./IconCall.scss";

const IconCall = ({ href, iconCallName, buttonText }) => (
  <span itemProp="telephone">
    <a
      className="icon-call"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={iconCallName}
    >
      <div style={{ width: 35, height: 35 }}>
        <Image fileName={iconCallName} className="icon-call_image" />
      </div>
      <h6 className="button-text">{buttonText}</h6>
    </a>
  </span>
);

IconCall.propTypes = {
  href: PropTypes.string,
  iconCallName: PropTypes.string,
  buttonText: PropTypes.string,
};

IconCall.defaultProps = {
  href: "",
  iconCallName: null,
  buttonText: "",
};

export default IconCall;

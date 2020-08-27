import React from "react";
import PropTypes from "prop-types";
import IconCall from "./IconCall";
import "./IconCallSet.scss";

const IconCallSet = ({ telefono, whatsapp, telegram }) => {
  return (
    <div className="icon-call-set">
      <IconCall href="tel:+393392153194" iconCallName="phone6.png" buttonText={telefono} />
      <IconCall
        href="https://wa.me/393392153194?text=Salve,%20avrei%20bisogno%20di%20un%20passaggio%20a%20"
        iconCallName="whatsapp.png"
        buttonText={whatsapp}
      />
      <IconCall href="https://telegram.me/" iconCallName="telegram.png" buttonText={telegram} />
    </div>
  );
};

IconCallSet.propTypes = {
  telefono: PropTypes.string,
  whatsapp: PropTypes.string,
  telegram: PropTypes.string,
};

IconCallSet.defaultProps = {
  telefono: null,
  whatsapp: null,
  telegram: null,
};

export default IconCallSet;

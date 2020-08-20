import React from "react";
import PropTypes from "prop-types";
import IconCall from "./IconCall";
import "./IconCallSet.scss";

const IconCallSet = ({ telefono, whatsapp, telegram }) => {
  return (
    <div className="icon-call-set">
      <IconCall href="tel:+393393286640" iconCallName="phone6.png" buttonText={telefono} />
      <IconCall
        href="https://wa.me/393393286640?text=Buonasera,%20avrei%20bisogno%20di%20un%20passaggio%20da%20via"
        iconCallName="whatsapp.png"
        buttonText={whatsapp}
      />
      <IconCall
        href="https://telegram.me/andrea91winter"
        iconCallName="telegram.png"
        buttonText={telegram}
      />
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

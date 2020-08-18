import React from "react";
import IconCall from "./IconCall";
import "./IconCallSet.scss";

const IconCallSet = () => {
  return (
    <div className="icon-call-set">
      <IconCall href="tel:+393393286640" iconCallName="phone6.png" />
      <IconCall
        href="https://wa.me/393393286640?text=Buonasera,%20avrei%20bisogno%20di%20un%20passaggio%20da%20via"
        iconCallName="whatsapp.png"
      />
      <IconCall href="https://telegram.me/andrea91winter" iconCallName="telegram.png" />
    </div>
  );
};

export default IconCallSet;

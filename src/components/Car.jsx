import React, { useState } from "react";
import PropTypes from "prop-types";

import { div, button } from "react-bootstrap";
import Image from "components/Image";
import "./Car.scss";

const Car = ({
  fluid,
  imageAlt,
  carName,
  carDetails,
  seats,
  numberOfSeats,
  price,
  amount,
  luggage,
  numberOfLuggage,
  detailButton,
}) => {
  const [isUp, setIsUp] = useState(true);

  return (
    <div className="car-container">
      <div className={`car-container_img ${isUp ? "isUp" : "isDown"}`}>
        <Image fileName={fluid} alt={imageAlt} />
        <h1>{carName}</h1>
      </div>
      <div className="text-left pl-4 desc">
        <h3 className="text-center pt-4 pb-5">{carDetails}</h3>
        <p>{`${seats}: ${numberOfSeats}`}</p>
        <p>{`${price}: €${amount}/Km`}</p>
        <p>{`${luggage}: ${numberOfLuggage}`}</p>
      </div>
      <div className="car-container_desc-button">
        <button type="button" onClick={() => setIsUp((prevState) => !prevState)}>
          <h6>{detailButton}</h6>
        </button>
      </div>
    </div>
  );
};

Car.propTypes = {
  fluid: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  carName: PropTypes.string.isRequired,
  carDetails: PropTypes.string,
  seats: PropTypes.string,
  numberOfSeats: PropTypes.string,
  price: PropTypes.string,
  amount: PropTypes.string,
  luggage: PropTypes.string,
  numberOfLuggage: PropTypes.string,
  detailButton: PropTypes.string,
};

Car.defaultProps = {
  imageAlt: "",
  carDetails: "",
  seats: "",
  numberOfSeats: "",
  price: "",
  amount: "",
  luggage: "",
  numberOfLuggage: "",
  detailButton: "",
};

export default Car;

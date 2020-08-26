import React, { useState } from "react";
import PropTypes from "prop-types";

import { div, button } from "react-bootstrap";
import Image from "components/Image";
import "./Car.scss";

import Icon from "components/Icon";

const Car = ({
  fluid,
  imageAlt,
  carName,
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
        <div className="car-container_banner">
          <h2>{carName}</h2>
        </div>
        <Image style={{ marginTop: 125 }} fileName={fluid} alt={imageAlt} />
      </div>
      <div>
        <div className="car-container_banner">
          <h2 className="text-center">{carName}</h2>
        </div>

        <div className="car-description">
          <Icon iconName="SeatIcon" size="2x" className="car-icon" />
          <div className="car-description_text">
            <h5>{seats}: </h5>
            <h3>{numberOfSeats}&nbsp;</h3>
          </div>
        </div>
        <div className="car-description">
          <Icon iconName="SuitcaseIcon" size="2x" className="car-icon" />
          <div className="car-description_text">
            <h5>{luggage}: </h5>
            <h3>{numberOfLuggage}&nbsp;</h3>
          </div>
        </div>
        <div className="car-description">
          <Icon iconName="RoadIcon" size="2x" className="car-icon" />
          <div className="car-description_text">
            <h5>{price}: </h5>
            <h3>{amount}&nbsp;</h3>
          </div>
        </div>
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
  seats: "",
  numberOfSeats: "",
  price: "",
  amount: "",
  luggage: "",
  numberOfLuggage: "",
  detailButton: "",
};

export default Car;

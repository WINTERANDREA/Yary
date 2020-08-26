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
        <Image className="my-auto " fileName={fluid} alt={imageAlt} />
      </div>
      <div className="text-left desc">
        <div className="car-container_banner">
          <h2 className="text-center">{carName}</h2>
        </div>
        <div style={{ display: "grid" }} />
        <div style={{ display: "flex" }}>
          <Icon iconName="SeatIcon" size="2x" className="car-icon" />
          <p>{`${seats}: ${numberOfSeats}`}</p>
        </div>
        <div style={{ display: "flex" }}>
          <Icon iconName="SuitcaseIcon" size="2x" className="car-icon" />
          <p>{`${luggage}: ${numberOfLuggage}`}</p>
        </div>
        <div style={{ display: "flex" }}>
          <Icon iconName="RoadIcon" size="2x" className="car-icon" />
          <p>{`${price}: €${amount}/Km`}</p>
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

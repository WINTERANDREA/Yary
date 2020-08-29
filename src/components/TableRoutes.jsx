import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";
import "./TableRoutes.scss";

const TableRoutes = ({ Route, Duration, Price, Disclaimer }) => {
  return (
    <>
      <table className="w-100 text-left">
        <thead>
          <tr>
            <th>{Route}</th>
            <th style={{ minWidth: 60 }}>{Duration}</th>
            <th style={{ minWidth: 44 }}>{Price}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-bottom rows-shadow">
            <td>
              Milano <Icon iconName="ArrowRight" className="car-icon" />
              Bergamo (BGY) <span>(50km)</span>
            </td>
            <td>50 Min</td>
            <td>100€</td>
          </tr>
          <tr className="border-bottom rows-shadow">
            <td>
              Milano <Icon iconName="ArrowRight" className="car-icon" />
              Milano Malpensa (MPX) <span>(50km)</span>
            </td>
            <td>45 Min</td>
            <td>95€</td>
          </tr>
          <tr className="border-bottom rows-shadow">
            <td>
              Milano <Icon iconName="ArrowRight" className="car-icon" />
              Milano Linate (LIN) <span>(9km)</span>
            </td>
            <td>20 Min</td>
            <td>30€</td>
          </tr>
          <tr className="border-bottom rows-shadow">
            <td>
              Milano
              <Icon iconName="ArrowRight" className="car-icon" />
              Milano Rho Fieramilano <span>(16km)</span>
            </td>
            <td>30 Min</td>
            <td>50€</td>
          </tr>
          <tr className="border-bottom rows-shadow">
            <td>
              Milano Linate (LIN) <Icon iconName="ArrowRight" className="car-icon" />
              Milano Rho Fieramilano <span>(30km)</span>
            </td>
            <td>30 Min</td>
            <td>65€</td>
          </tr>
        </tbody>
      </table>
      <p className="text-left pt-3 small">{Disclaimer}</p>
    </>
  );
};

TableRoutes.propTypes = {
  Route: PropTypes.string,
  Duration: PropTypes.string,
  Price: PropTypes.string,
  Disclaimer: PropTypes.string,
};

TableRoutes.defaultProps = {
  Route: "",
  Duration: "",
  Price: "",
  Disclaimer: "",
};

export default TableRoutes;

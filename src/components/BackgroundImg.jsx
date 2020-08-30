import React from 'react'
import PropTypes from "prop-types";
import clsx from "clsx";
import BackgroundImage from 'gatsby-background-image'
import "./BackgroundImg.scss";

const BackgroundImg = ({bgImage, className, bgLayer, containerStyle, children}) => {
  
      
      return (
        <BackgroundImage Tag="section"
         className={clsx("bg-img", className)}
          fluid={bgImage}
          backgroundColor="$gray-900">
            <div style={{background: bgLayer, ...containerStyle}}>
              {children}
            </div>
          
        </BackgroundImage>
      )
    
}

BackgroundImg.propTypes = {
  bgImage: PropTypes.string,
  bgLayer: PropTypes.string,
  containerStyle: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};

BackgroundImg.defaultProps = {
    className: null,
  bgImage: '',
  bgLayer: '',
  containerStyle: '',
  children: null
};



export default BackgroundImg
import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { Button, Container } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";
import IconCallSet from "components/IconCallSet";
import BackgroundImg from "components/BackgroundImg";
import "./Top.scss";


const Top = ({ frontmatter }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "assets/images/head-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  if (!frontmatter) {
    return null;
  }

  const {
    header,
    subheader,
    jumpToAnchor,
    jumpToAnchorText,
    telefono,
    whatsapp,
    telegram,
  } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  /* const icon = <IconCallSet telefono={telefono} whatsapp={whatsapp} telegram={telegram} />; */
  return (
    <>
      <BackgroundImg className='padding-bg-top' bgLayer='rgba(0,0,0,.2)' bgImage={data.file.childImageSharp.fluid}>
       <Container
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textAlign: 'center',
            color: 'white'
          }}
        >
          <h1 className="intro-heading text-uppercase">{header}</h1>
          <h3 className="my-0 py-3">{subheader}</h3>
         <IconCallSet telefono={telefono} whatsapp={whatsapp} telegram={telegram} />
        </Container>
      </BackgroundImg>
   
    </>
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;

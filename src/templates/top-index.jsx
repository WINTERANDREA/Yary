import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Top from "views/Top";
import Footer from "views/Footer";
import * as Sections from "views/Sections";
import SEO from "components/SEO";
import LanguageSelector from "components/LanguageSelector";

import "utils/fixFontAwesome";
import breakDownAllNodes from "utils/breakDownAllNodes";
import fileNameToSectionName from "utils/fileNameToSectionName";

import "../style/main.scss";

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery($langKey: String!) {
    site {
      siteMetadata {
        keywords
        description
        title
        image
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { order: ASC, fields: [fields___directoryName, fields___fileName] }
    ) {
      nodes {
        frontmatter {
          brand
          anchor
          cars2 {
            imageFileName
            imageAlt
            carName
            seats
            numberOfSeats
            price
            amount
            luggage
            numberOfLuggage
            detailButton
          }
          clients {
            href
            imageFileName
          }
          content
          copyright
          Disclaimer
          Duration
          header
          HeadText
          HeadDescription
          email
          imageFileName
          jumpToAnchor
          jumpToAnchorText
          menuText
          portfolios {
            content
            extraInfo
            header
            subheader
            imageFileNameDetail
            imageFileName
          }
          Price
          privacyHref
          privacyText
          Route
          seoImage
          seoTitle
          seoDescription
          seoKeywords
          services {
            content
            header
            iconName
            imageFileName
          }
          social {
            facebook
            github
            linkedin
            medium
            twitter
          }
          subheader
          teamMember {
            header
            imageFileName
            social {
              facebook
              github
              linkedin
              medium
              twitter
            }
            subheader
          }
          telefono
          telegram
          telephone
          termsHref
          termsText
          title
          timeline {
            content
            header
            imageContent
            imageFileName
            subheader
          }
          whatsapp
        }
        fields {
          fileName
          directoryName
        }
      }
    }
  }
`;

const IndexPage = ({ data, pathContext: { langKey, defaultLang, langTextMap } }) => {
  const {
    site: {
      siteMetadata: { keywords, description, title },
    },
    allMarkdownRemark: { nodes },
  } = data;

  const { seoTitle, seoDescription, seoKeywords, seoImage } = nodes[2].frontmatter;

  const { topNode, navBarNode, anchors, footerNode, sectionsNodes } = breakDownAllNodes(nodes);

  let langSelectorPart;
  if (langTextMap != null && Object.keys(langTextMap).length > 1) {
    langSelectorPart = (
      <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
    );
  }

  return (
    <>
      <SEO
        lang={langKey}
        title={seoTitle}
        keywords={seoKeywords}
        description={seoDescription}
        image={seoImage}
      />
      <Navbar
        anchors={anchors}
        frontmatter={navBarNode.frontmatter}
        extraItems={langSelectorPart}
      />
      <Top frontmatter={topNode.frontmatter} />
      {
        // dynamically import sections
        sectionsNodes.map(({ frontmatter, fields: { fileName } }, ind) => {
          const sectionComponentName = fileNameToSectionName(fileName);
          const SectionComponent = Sections[sectionComponentName];

          return SectionComponent ? (
            <SectionComponent
              key={sectionComponentName}
              className={ind % 2 === 1 ? "bg-light" : null}
              frontmatter={frontmatter}
            />
          ) : null;
        })
      }
      <Footer frontmatter={footerNode.frontmatter} />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object,
};

IndexPage.defaultProps = {
  pathContext: {
    langKey: "it",
    defaultLang: "it",
    langTextMap: {},
  },
};

export default IndexPage;

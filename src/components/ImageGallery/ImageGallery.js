import { styled } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

const Image = styled(Img, {
  objectFit: 'cover',
  objectPosition: '100% 0',
  width: '100%',
  height: '100%',
  maxHeight: '25rem',
});

const ImageGallery = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          relativeDirectory: { eq: "baat_pakki" }
        }
      ) {
        edges {
          node {
            id
            name
            extension
            relativeDirectory
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const renderImages = () => {
    const images = edges.map(({ node }) => {
      const { id, name, childImageSharp } = node;
      return (
        <FlexGridItem key={id} flexGridItemIndex={id}>
          <Image loading="lazy" alt={name || ''} fluid={childImageSharp.fluid} />
        </FlexGridItem>
      );
    });

    return images;
  };

  return (
    <FlexGrid
      // Brackets specify the options for different breakpoints
      // 1 column for small devices
      // 2 columns for medium devices
      // 3 columns for large devices
      flexGridColumnCount={[1, 2, 3]}
      flexGridColumnGap={['scale0', 'scale200']}
      flexGridRowGap={['scale0', 'scale200']}
    >
      {renderImages()}
    </FlexGrid>
  );
};

export default ImageGallery;

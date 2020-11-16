import {
  ALIGN,
  HeaderNavigation,
  StyledNavigationItem,
  StyledNavigationList,
} from 'baseui/header-navigation';
import { StyledLink } from 'baseui/link';
import PropTypes from 'prop-types';

import * as React from 'react';

const ImageGalleryHeader = ({ pageTitle }) => (
  <HeaderNavigation>
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>{pageTitle}</StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.center} />
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        <StyledLink href="https://muyuphotography.smugmug.com/">
          Photos by Muhammad Yunus
        </StyledLink>
      </StyledNavigationItem>
    </StyledNavigationList>
  </HeaderNavigation>
);

ImageGalleryHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default ImageGalleryHeader;

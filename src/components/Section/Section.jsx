import React from 'react';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { ButtonGroup, Buttons, DownArrow, ItemText, LeftButton, RightButton, Wrap } from './SectionStyled';

function Section({ image, title, leftBtnText, rightBtnText, isRightRemove }) {
  return (
    <Wrap image={image}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>Order Online for Touchless Delivery</p>
        </ItemText>
      </Fade>
      <Zoom>
        <Buttons>
          <ButtonGroup clear>
            <LeftButton>{leftBtnText}</LeftButton>
            {!isRightRemove && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Zoom>
    </Wrap>
  );
}

export default Section;



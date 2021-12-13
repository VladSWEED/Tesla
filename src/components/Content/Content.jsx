import React from 'react';
import Section from '../Section/Section';
import { Container } from './ContentStyled';

function Content() {
  return (
    <Container>
      <Section
        image="model-Y.jpg"
        title="Model Y"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        image="model-s.jpg"
        title="Model S"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        image="model-3.jpg"
        title="Model 3"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        image="model-x.jpg"
        title="Model X"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        image="solar-panel.jpg"
        title="Solar Panels"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        image="solar-roof.jpg"
        title="Solar Roof"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        image="accessories.jpg"
        title="Accessories"
        leftBtnText="Shop now"
        isRightRemove={true}
      />
    </Container>
  );
}

export default Content;
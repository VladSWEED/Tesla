import React, { useState } from 'react';
import { BurgerNav, CloseBtn, CloseWrapper, Container, Logo, Menu, MenuIcon, RightMenu } from './HeaderStyled';

function Header() {
  const [show, setShow] = useState(false)
  return (
    <Container>
      <Logo>
        <a href="#"><img src="/images/logo.svg" alt="logo" /></a>
      </Logo>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
        <MenuIcon onClick={() => setShow(true)}/>
      </RightMenu>
      <BurgerNav show={show}>
        <CloseWrapper>
          <CloseBtn onClick={() => setShow(false)} />
        </CloseWrapper>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Powerwall</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;



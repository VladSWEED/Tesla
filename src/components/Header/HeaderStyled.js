import styled from 'styled-components';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 35px;
  z-index: 1;
  a img {
    height: 17px;
    width: 130px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 15px;
    margin: 0 15px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 15px;
    margin-right: 15px;
  }
  @media (max-width: 576px) {
    a {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  width: 13%;
`;

export const MenuIcon = styled(DehazeIcon)`
  cursor: pointer;
`;

export const BurgerNav = styled.div`
    position: fixed;
    z-index: 16
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background-color: white;
    width: 300px;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 25px;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    transform: ${(props) => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: all 0.6s ease-out;
    li {
        width: 100%;
        margin-top: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .2)
    }
    a {
        font-weight: 600;
    }
`;

export const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
`;
export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

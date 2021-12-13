import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url('/images/${props.image}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    font-size: 40px;
    letter-spacing: 4px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  margin: 8px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
export const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: rgba(23, 26, 32, 0.8);
`;
export const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
export const Buttons = styled.div``;
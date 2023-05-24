import ComBtn from 'comComponents/ComBtn';
import styled from 'styled-components';

const Btn = styled(ComBtn)`
  display: none;

  @media (max-width: 767.92px) {
    display: flex;
    position: relative;
    flex: 0 0 30px;
    height: 18px;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;

    span,
    &::before,
    &::after {
      content: '';
      background: #000;
      height: 2px;
      width: 100%;
    }
  }
`;

const Burger = ({className, handle, visible}) => {
  return (
    <Btn className={className} onClick={() => handle(!visible)}>
      <span></span>
    </Btn>
  );
};

export default Burger;

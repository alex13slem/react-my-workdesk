import {Backdrop, Window} from 'comComponents/ComModal';
import styled, {css} from 'styled-components';

const StyledBackdrop = styled(Backdrop)`
  background-color: rgb(0 0 0 / 40%);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
`;

const StyledWindow = styled(Window)`
  position: relative;
  font-family: 'Museo Sans Cyrl', sans-serif;
  color: #ffffff9c;

  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(
    189deg,
    #263e66 20%,
    #09213d 40%,
    #111f2d 61%,
    #23599c 79%
  );
  border-image-slice: 1;
  background-color: rgba(21, 10, 1, 0.5);

  transition: all 0.3s ease-in-out;

  &::after,
  &::before {
    position: absolute;
    content: '';
    width: 34px;
    height: 34px;
  }

  &::after {
    background: url('img-space-x/left_glare.webp') 0 0 no-repeat;
    left: -16px;
    bottom: -16px;
  }
  &::before {
    background: url('img-space-x/right_glare.webp') 0 0 no-repeat;
    right: -16px;
    top: -16px;
  }
`;

const borderCSS = css`
  border-style: solid;
  border-image-source: linear-gradient(
    189deg,
    #263e66 20%,
    #09213d 40%,
    #111f2d 61%,
    #23599c 79%
  );
  border-image-slice: 1;
  border-width: 0;
`;

const paddingCSS = css`
  padding: 15px 20px;
`;

const Header = styled.div`
  ${paddingCSS}

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${borderCSS}
  border-bottom-width: 1px;

  .title {
    color: #ffffffe7;
    font-variant: all-small-caps;
    font-weight: 700;
    font-size: 24px;
  }

  .close-x {
    padding: 5px 7px;
    border-radius: 5px;
    line-height: 1;
    color: #ffffff9c;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover,
    &:focus {
      background-color: rgba(21, 10, 1, 0.21);
    }
  }
`;

const Body = styled.div`
  ${paddingCSS}
`;

const Footer = styled.div`
  ${paddingCSS}

  display: flex;
  justify-content: end;

  ${borderCSS}
  border-top-width: 1px;
`;

const ModalSpaceX = ({
  children,
  isOpen,
  handlerOpen,
  wrapperId = 'modalSpaceX',
  title = '',
  btns,
}) => {
  return (
    <StyledBackdrop
      handlerOpen={handlerOpen}
      isOpen={isOpen}
      wrapperId={wrapperId}
      transTime={300}
    >
      <StyledWindow>
        <Header>
          <span className="title">{title}</span>
          <span className="close-x" onClick={() => handlerOpen(false)}>
            &#10006;
          </span>
        </Header>
        <Body>{children}</Body>
        {btns && <Footer>{btns}</Footer>}
      </StyledWindow>
    </StyledBackdrop>
  );
};

export default ModalSpaceX;

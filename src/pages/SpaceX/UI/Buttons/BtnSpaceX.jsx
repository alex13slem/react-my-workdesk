import styled from 'styled-components';

const Btn = styled.button`
  padding: 8px 23px;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 100;
  color: #ffffff9c;
  white-space: nowrap;

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

  transform-origin: right;
  transition: border-image-source 0.3s ease, transform 0.3s ease;

  ${({red}) =>
    red
      ? 'background-color: rgba(111, 0, 0, 0.666);'
      : 'background-color: rgba(0, 0, 0, 0.21);'}

  ${({glare}) =>
    glare &&
    `
    position: relative;
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
  `}

  &:hover {
    border-image-source: linear-gradient(
      300deg,
      #263e66 20%,
      #09213d 40%,
      #111f2d 61%,
      #23599c 79%
    );
  }
`;

export const BtnSpaceX = ({children = 'Нажми', className, ...props}) => {
  return (
    <Btn className={className} {...props}>
      {children}
    </Btn>
  );
};

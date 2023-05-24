import ComBtn from 'comComponents/ComBtn';
import styled from 'styled-components';

const Btn = styled(ComBtn)`
  display: inline-block;

  font-family: 'Raleway';
  font-weight: 800;
  font-size: 10px;
  line-height: 1.5em;
  padding: 1.25em 3em;
  letter-spacing: 0.14em;
  text-align: center;
  color: #fcfdfe;

  border-radius: 0.5em;
  text-decoration: none;
  cursor: pointer;

  transition: background-color 0.3s ease;

  ${({blue}) =>
    (blue &&
      `
      background-color: #4285f4;
      &:hover {
        background-color: #5795f8;
      }
    `) ||
    `
      background-color: #ec5863;
      &:hover {
        background-color: #e06f77;
      }
    `}
`;

const ButtonGoCorona = ({children, className, blue, ...props}) => {
  return (
    <Btn className={className} blue={blue} {...props}>
      {children}
    </Btn>
  );
};

export default ButtonGoCorona;

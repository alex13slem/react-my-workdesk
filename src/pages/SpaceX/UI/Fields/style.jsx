import {css} from 'styled-components';

export const borderCSS = css`
  border-width: 1px;
  border-image-slice: 1;
  transition: 0.3s ease;
  transition-property: border-image-source;
  border-image-source: linear-gradient(
    189deg,
    #263e66 20%,
    #09213d 40%,
    #111f2d 61%,
    #23599c 79%
  );

  &:focus,
  &:focus-within {
    border-image-source: linear-gradient(
      300deg,
      #263e66 20%,
      #09213d 40%,
      #111f2d 61%,
      #23599c 79%
    );
  }

  ${({isValid}) =>
    (isValid === 'invalid' &&
      `
    border-image-source: linear-gradient(
    189deg,
    #662626 20%,
    #3d0909 40%,
    #2d1111 61%,
    #9c2323 79%
  );
  &:focus,
  &:focus-within {
    border-image-source: linear-gradient(
      300deg,
      #662626 20%,
      #3d0909 40%,
      #2d1111 61%,
      #9c2323 79%
    );
  `) ||
    (isValid === 'valid' &&
      `
  border-image-source: linear-gradient(
    189deg,
    #2e6626 20%,
    #0f3d09 40%,
    #132d11 61%,
    #379c23 79%
  );
  &:focus,
  &:focus-within {
    border-image-source: linear-gradient(
      300deg,
      #2e6626 20%,
      #093d09 40%,
      #142d11 61%,
      #2d9c23 79%
    );
  `)}
`;

export const fieldCSS = css`
  flex: 1 1 auto;
  width: 100%;
  position: relative;

  background-color: ${({theme}) =>
    theme.backgroundColor ? 'transparent' : 'rgba(21, 10, 1, 0.21)'};

  font-family: 'Museo Sans Cyrl', Geneva, Verdana, sans-serif;
  font-size: ${({theme}) => theme.fontSize || '18px'};
  color: #fafafa;
  border-style: ${({theme}) =>
    theme.borderStyle === 'solid' ? 'none' : 'solid'};

  ${borderCSS}

  outline: none;

  &::placeholder {
    font-size: 1em;

    transition: 0.3s ease;
    transform-origin: left;
    transition-property: opacity, transform;
  }

  &:focus::placeholder {
    opacity: 0;
    touch-action: none;

    transform: scale(90%);
  }
`;

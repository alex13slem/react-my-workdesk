import {LayoutWrap} from '@SpaceX/components/Layout';
import {useProductsData} from '@SpaceX/store';
import styled from 'styled-components';

const Root = styled.div`
  @keyframes loading {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes pulsar {
    0% {
      opacity: 50%;
    }
    100% {
      opacity: 100%;
    }
  }

  z-index: 1;
  position: sticky;
  top: 0;
  margin-block: 32px;

  padding-block: 12px;
  display: flex;
  gap: 10px;

  background-color: #00000036;
  border-block: 1px solid rgba(152, 147, 147, 0.21);
  backdrop-filter: blur(8px) hue-rotate(338deg);

  ${({isLoading}) =>
    isLoading &&
    `
    &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    background-color: #ff00004b;

    animation: pulsar 0.5s ease infinite alternate;
  }
  `}
`;

const Wrap = styled(LayoutWrap)``;

const TopPanel = ({className, children, style}) => {
  const {isLoading} = useProductsData();
  // console.log(isLoading);
  return (
    <Root className={className} style={style} isLoading={isLoading}>
      <Wrap>{children}</Wrap>
    </Root>
  );
};

export default TopPanel;

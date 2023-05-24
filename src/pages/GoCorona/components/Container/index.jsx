import styled from 'styled-components';

const Container = styled.div`
  max-width: 1087px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 1087px) {
    max-width: 970px;
  }

  @media (max-width: 991.98px) {
    max-width: 750px;
  }
  @media (max-width: 767.98px) {
    max-width: none;
  }
  @media (max-width: 478.98px) {
  }
`;

export default Container;

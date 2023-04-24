import styled from 'styled-components';

const Section = styled.section`
  p {
    font-size: 250%;
    cursor: default;

    @media (orientation: portrait) {
      text-align: right;
    }
    @media (max-width: 767.98px) {
      font-size: 190%;
    }
  }
`;

const Greeting = ({children, className}) => {
  return (
    <Section className={className}>
      <p>{children}</p>
    </Section>
  );
};

export default Greeting;

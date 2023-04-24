import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import {Button} from './components';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

const Contacts = ({className}) => {
  return (
    <Section className={className}>
      <Button href="https://github.com/alex13slem" target="_blank">
        GitHub
        <FontAwesomeIcon icon={faGithub} />
      </Button>

      <Button href="https://codepen.io/alex13slem" target="_blank">
        CodePen
        <FontAwesomeIcon icon={faCodepen} />
      </Button>

      <Button href="https://t.me/a_s_scherba" target="_blank">
        Telegram
        <FontAwesomeIcon icon={faTelegram} />
      </Button>
    </Section>
  );
};

export default Contacts;

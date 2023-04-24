import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import {SocialLink} from '../../UI/buttons';
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
      <SocialLink href="https://github.com/alex13slem" target="_blank">
        GitHub
        <FontAwesomeIcon icon={faGithub} />
      </SocialLink>

      <SocialLink href="https://codepen.io/alex13slem" target="_blank">
        CodePen
        <FontAwesomeIcon icon={faCodepen} />
      </SocialLink>

      <SocialLink href="https://t.me/a_s_scherba" target="_blank">
        Telegram
        <FontAwesomeIcon icon={faTelegram} />
      </SocialLink>
    </Section>
  );
};

export default Contacts;

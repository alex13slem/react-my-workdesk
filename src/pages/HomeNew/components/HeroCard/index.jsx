import {
  faCodepen,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {Greeting} from './Greeting';

const Root = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;

  .avatar {
    box-shadow: 0 0 0 1px rgba(240, 246, 252, 0.1);
    display: inline-block;
    flex-shrink: 0;
    line-height: 1;
    overflow: hidden;
    vertical-align: middle;
    border-radius: 50%;

    @media (max-width: 1011.98px) {
      width: 256px;
      height: 256px;
    }
    @media (max-width: 767.98px) {
      width: 117px;
      height: 117px;
    }
  }

  .names {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__fullname {
      display: flex;
      justify-content: space-between;
      align-items: end;
      border-bottom: 1px solid var(--color-l-grey);
      font-size: 24px;
      line-height: 1.5;
      color: var(--color-white);

      h1 {
        font-size: inherit;
        cursor: default;
      }

      &-i {
        display: flex;
        align-items: end;
        gap: 10px;
      }
    }
    &__nickname {
      display: flex;
      justify-content: space-between;
      align-items: end;
      font-size: 20px;
      font-weight: 300;
      line-height: 1.5;
      border-bottom: 1px solid var(--color-l-grey);
      color: var(--color-l-grey);

      span {
        cursor: default;
      }

      &-i {
        display: flex;
        align-items: end;
        gap: 8px;

        svg {
          transition: color 0.3s ease-in;
        }

        svg:hover {
          color: var(--color-white);
        }
      }
    }
  }
`;

const HeroCard = ({className}) => {
  return (
    <Root className={className}>
      <img
        className="avatar"
        src="https://avatars.githubusercontent.com/u/104124319?v=4"
        alt="avatar"
        width="296"
        height="296"
      />
      <div class="names">
        <p className="names__fullname">
          <h1>a.s.scherba</h1>
          <div className="names__fullname-i">
            <a href="mailto:a.s.scherba@yandex.by">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a target="_blank" href="https://t.me/a_s_scherba">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </p>
        <p className="names__nickname">
          <span>alex13slem</span>
          <div className="names__nickname-i">
            <a target="_blank" href="https://codepen.io/alex13slem">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
            <a target="_blank" href="https://github.com/alex13slem">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </p>
      </div>
      <Greeting />
    </Root>
  );
};

export default HeroCard;

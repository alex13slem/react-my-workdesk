import {faEye} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  padding: 16px;

  border-color: var(--color-grey);
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;

  .row {
    display: flex;
    justify-content: space-between;
    gap: 14px;
  }

  .title {
    svg {
      transition: color 0.3s ease-in;
    }

    &:hover {
      svg {
        color: #ff00007b;
      }
    }

    p {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    span {
      color: var(--color-accent);
      font-weight: 600;
    }
  }

  svg {
    color: var(--color-l-grey);
    fill: var(--color-l-grey);
  }
`;

export const ProjectItem = ({className, data}) => {
  return (
    <Root className={className}>
      <Link className="row title" to={data?.link}>
        <p>
          <svg height="16" viewBox="0 0 16 16" width="16">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          <span>{data?.name}</span>
        </p>
        <FontAwesomeIcon icon={faEye} />
      </Link>
      <div className="row">
        <p class="technology">{data?.tech}</p>
        <p className="purpose">{data?.purpose}</p>
      </div>
    </Root>
  );
};

import {useDocumentTitle} from 'hooks';
import {Button} from './UI/Button';
import styled from 'styled-components';
import {useDocumentFavicon} from 'hooks/useDocumentFavicon';
import {varsCss} from '../HomeNew/pages/layout/varsCss';
import {Link} from 'react-router-dom';

const Root = styled.div`
  ${varsCss}
  background-color: var(--color-bg);
  color: var(--color-l-grey);
  font-family: var(--font-main);
  font-size: 26px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px;

  @media (orientation: portrait) {
    align-items: start;
  }

  .message {
    font-size: 70px;
    text-transform: uppercase;
    cursor: default;
  }
`;

const NotFound = ({className}) => {
  useDocumentTitle('Not Found 404 :(');
  useDocumentFavicon({
    ico: 'favicon/404.png',
    svg: 'favicon/404.svg',
  });
  return (
    <Root className={className}>
      <div>
        <h1 className="message">Такой страницы нет</h1>
        <Link className="back-btn" to={'/'}>
          Вернуться на главную
        </Link>
      </div>
    </Root>
  );
};

export default NotFound;

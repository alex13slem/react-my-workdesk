import {useDocumentTitle} from 'hooks';
import {Button} from './UI/Button';
import styled from 'styled-components';

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;

  @media (orientation: portrait) {
    align-items: start;
  }

  .message {
    font-size: 70px;
    text-transform: uppercase;
  }
`;

const NotFound = ({className}) => {
  useDocumentTitle('Not Found 404 :(');
  return (
    <Root className={className}>
      <h1 className="message">Такой страницы нет</h1>
      <Button to={'/'}>Вернуться на главную</Button>
    </Root>
  );
};

export default NotFound;

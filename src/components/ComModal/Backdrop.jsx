import {CSSTransition} from 'react-transition-group';
import styled from 'styled-components';
import {ReactPortal} from '..';
import {useEffect, useRef} from 'react';

const StyledBackdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  &.modal-enter-done {
    opacity: 1;
  }
  &.modal-exit {
    opacity: 0;
  }
`;

export const Backdrop = ({
  children,
  wrapperId,
  isOpen = false,
  handlerOpen,
  animTime = 300,
  className,
}) => {
  const nodeRef = useRef(null);
  const closeOnEscapeKey = (e) => e.key === 'Escape' && handlerOpen(false);

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handlerOpen]);
  return (
    <ReactPortal wrapperId={wrapperId}>
      <CSSTransition
        in={isOpen}
        timeout={{entry: 0, exit: animTime}}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <StyledBackdrop
          className={className}
          onClick={(e) => e.target === nodeRef.current && handlerOpen(false)}
          ref={nodeRef}
        >
          {children}
        </StyledBackdrop>
      </CSSTransition>
    </ReactPortal>
  );
};

import css from './style.module.scss';

import ComModal from 'comComponents/ComModal';

const ModalSpaceX = ({
  children,
  isOpen,
  setOpen,
  wrapperId = 'modalSpaceX',
  title = '',
  btns,
}) => {
  return (
    <ComModal
      isOpen={isOpen}
      setOpen={setOpen}
      wrapperId={wrapperId}
      classNames={{
        backdrop: css['backdrop'],
        window: css['window'],
        enterDone: css['anim-enter-done'],
        exit: css['anim-exit'],
      }}
      transTime={300}
    >
      <div className={css['header']}>
        <span className={css['title']}>{title}</span>
        <span className={css['close-x']} onClick={() => setOpen(false)}>
          &#10006;
        </span>
      </div>
      <div className={css['body']}>{children}</div>
      {btns && <div className={css['footer']}>{btns}</div>}
    </ComModal>
  );
};

export default ModalSpaceX;

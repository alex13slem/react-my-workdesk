import css from './style.module.scss';

const Greeting = ({children, gridPos}) => {
  return (
    <div className={css['greeting']} style={gridPos}>
      <p>{children}</p>
    </div>
  );
};

export default Greeting;

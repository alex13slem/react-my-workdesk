export const SVGBurger = ({className}) => {
  return (
    <svg
      className={className}
      xmlnsname="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
    >
      <path
        stroke="rgba(0, 0, 0, 0.5)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M4 7h22M4 15h22M4 23h22"
      />
    </svg>
  );
};
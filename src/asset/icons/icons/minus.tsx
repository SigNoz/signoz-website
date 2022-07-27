import { IconProps } from "..";

const Minus = (props: IconProps) => {
  return (
    <svg
      width="12"
      height="2"
      viewBox="0 0 12 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M10.6667 0.333496H1.33341C1.1566 0.333496 0.987035 0.403734 0.86201 0.528758C0.736986 0.653783 0.666748 0.823352 0.666748 1.00016C0.666748 1.17697 0.736986 1.34654 0.86201 1.47157C0.987035 1.59659 1.1566 1.66683 1.33341 1.66683H10.6667C10.8436 1.66683 11.0131 1.59659 11.1382 1.47157C11.2632 1.34654 11.3334 1.17697 11.3334 1.00016C11.3334 0.823352 11.2632 0.653783 11.1382 0.528758C11.0131 0.403734 10.8436 0.333496 10.6667 0.333496Z"
        fill="#F25733"
      />
    </svg>
  );
};

export default Minus;
import Link from "next/link";

export interface ButtonProps {
  unstyled?: boolean;
  disabled?: boolean;
  link?: string;
  inverse?: boolean;
  navButton?: boolean;
  danger?: boolean;
  dangerInverse?: boolean;
  size?: "small" | "big";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const classes = props.unstyled
    ? `${props.className}`
    : `button button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"}
  
    ${props.dangerInverse && "button--danger--inverse"}   
    ${props.navButton && "button--navigation"}
    ${props.className}`;

  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button
        className={classes}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;

import { Link } from "react-router-dom";
import { Inner, Logo } from "./styles/header";
export default function Header({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

Header.Logo = function HeaderLogo({ to = "/", ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

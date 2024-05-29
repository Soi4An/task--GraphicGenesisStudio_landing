import logo from "../../images/logo_ukr.png";
import "./Logo.scss";

function Logo({ menuHidden }) {
  return (
    <a href='/' onClick={menuHidden} className="logo__wrapper">
      <img src={logo} alt="logo" />
    </a>
    // <span className="logo__wrapper">
    //   <img src={logo} alt="logo" />
    // </span>
  );
}

export default Logo;

import "./ButtonMenu.scss";
import classNames from "classnames";

function ButtonMenu({ menuSwitch, isMenu }) {
  return (
    <button
      className={classNames("menu-button", { "menu-button--open": isMenu })}
      onClick={menuSwitch}
    >
      <span className="menu-button__bar menu-button__bar--top" />
      <span className="menu-button__bar menu-button__bar--middle" />
      <span className="menu-button__bar menu-button__bar--bottom" />
    </button>
  );
}

export default ButtonMenu;

import ButtonCustom from "../ButtonCustom/ButtonCustom";
import HeaderList from "../HeaderList/HeaderList";
import "./DropDownMenu.scss";
import classNames from "classnames";

function DropDownMenu({ isMenu }) {
  return (
    <nav className={classNames(
      'menu', { 'menu--open': isMenu }
    )}>
      <div className="menu__button-sign-up">
        <ButtonCustom text={"Записатися"} type={"black"} />
      </div>

      <div className="menu__nav">
        <HeaderList />
      </div>
    </nav>
  );
}

export default DropDownMenu;

import ButtonCustom from "../ButtonCustom/ButtonCustom";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import HeaderList from "../HeaderList/HeaderList";
import Logo from "../Logo/Logo";
import "./Header.scss";

function HeaderBar({ menuSwitch, menuHidden, isMenu }) {
  return (
    <header className="header">
      <Logo menuHidden={menuHidden} />

      <nav className="header__nav">
        <HeaderList />
      </nav>

      <div className="header__button-sign-up">
        <ButtonCustom text={"Записатися"} type={"black"} />
      </div>

      <div className="header__button-menu">
        <ButtonMenu menuSwitch={menuSwitch} isMenu={isMenu} />
      </div>
    </header>
  );
}

export default HeaderBar;

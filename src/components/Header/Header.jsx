import ButtonCustom from "../ButtonCustom/ButtonCustom";
import HeaderList from "../HeaderList/HeaderList";
import Logo from "../Logo/Logo";
import './Header.scss';

function Header({ menuSwitch, menuHidden }) {
  return (
    <header className="header">
      <Logo />

      <nav className="header__nav">
        <HeaderList />
      </nav>

      <div className="header__button-sign-up">
        <ButtonCustom text={'Записатися'} type={'black'} />
      </div>

      <div>
        {/* <ButtonMenu /> */}
      </div>
    </header>

    
  );
}

export default Header;

import ButtonCustom from "../ButtonCustom/ButtonCustom";
import HeaderList from "../HeaderList/HeaderList";
import "./DropDownMenu.scss";

function DropDownMenu() {
  return (
    <nav className="menu">
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

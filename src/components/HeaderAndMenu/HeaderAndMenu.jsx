import { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import Container from "../Container/Container";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import "./HeaderAndMenu.scss";
import classNames from "classnames";
import { debounce } from "lodash";

const HeaderAndMenu = () => {
  const [isMenu, setIsMenu] = useState(false);

  const menuSwitch = useCallback(() => setIsMenu((curr) => !curr), []);
  const menuHidden = useCallback(
    () =>
      setIsMenu((curr) => {
        if (curr === true) {
          return false;
        }
      }),
    []
  );

  const handleSetPhotosQuantity = debounce(() => {
    if (window.innerWidth >= 1440) {
      menuHidden();
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleSetPhotosQuantity);

    return () => {
      window.removeEventListener("resize", handleSetPhotosQuantity);
    };
  }, [handleSetPhotosQuantity]);

  useEffect(() => {
    if (isMenu) {
      document.body.classList.add("body__with-menu");
    } else {
      document.body.classList.remove("body__with-menu");
    }
  }, [isMenu]);

  return (
    <header
      className={classNames("header-menu", { "header-menu--open": isMenu })}
    >
      <Container>
        <Header
          menuHidden={menuHidden}
          menuSwitch={menuSwitch}
          isMenu={isMenu}
        />
      </Container>

      <DropDownMenu />
    </header>
  );
};

export default HeaderAndMenu;

import { useCallback, useEffect, useState } from "react";
import Header from "./Header/Header";
import Container from "./Container/Container";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

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

  useEffect(() => {
    if (isMenu) {
      document.body.classList.add("body__with-menu");
    } else {
      document.body.classList.remove("body__with-menu");
    }
  }, [isMenu]);

  return (
    <div>
      <Container>
        <Header
          menuHidden={menuHidden}
          menuSwitch={menuSwitch}
          isMenu={isMenu}
        />
      </Container>

      <DropDownMenu isMenu={isMenu} />
    </div>
  );
};

export default HeaderAndMenu;

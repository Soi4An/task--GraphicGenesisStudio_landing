import './App.scss';
import { useCallback, useState } from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

function App() {
  const [isMenu, setIsMenu] = useState(false);

  const menuSwitch = useCallback(() => setIsMenu(curr => !curr), []);
  const menuHidden = useCallback(() => setIsMenu(curr => {
    if (curr === true) {
      return false;
    }
  }), []);

  return (
    <div>
      <Container>
        <Header menuHidden={menuHidden} menuSwitch={menuSwitch} isMenu={isMenu} />
      </Container>

      {/* <DropDownMenu /> */}
    </div>
  );
};

export default App;

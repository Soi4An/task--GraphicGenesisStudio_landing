import './App.scss';
import { useCallback, useState } from 'react';
import Header from './components/Header/Header';

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
      <Header menuHidden={menuHidden} menuSwitch={menuSwitch} isMenu={isMenu} />

      {/* <DropDownMenu /> */}
    </div>
  );
};

export default App;

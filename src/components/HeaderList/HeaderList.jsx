import './HeaderList.scss';

const navList = ['Спікери', 'Програма', 'Відгуки', 'FAQ'];

function HeaderList() {
  return (
    <ul className='nav'>
      {navList.map(pageName => (
        <li key={pageName} className='nav__item'>{pageName}</li>
      ))}
    </ul>
  );
}

export default HeaderList;

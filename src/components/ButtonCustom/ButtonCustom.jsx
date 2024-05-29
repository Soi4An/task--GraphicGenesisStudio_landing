import './ButtonCustom.scss';
import classNames from 'classnames';

function ButtonCustom({ text, type = 'violet'}) {
  return (
    <button className={classNames(
      'button', {
        'button__black': type === 'black',
        'button__violet': type === 'violet',
      }
    )}>
      {text}
    </button>
  );
}

export default ButtonCustom;

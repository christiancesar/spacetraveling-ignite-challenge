import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

export function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="spacetraveling" />;
      </div>
    </header>
  );
}

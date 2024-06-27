import Navbar from './navbar';
import { UI } from '../index';

export default function Header() {
  return (
    <header className="h-screen">
      <Navbar />
      <div className="pt-24">
        <UI.HeroHeader />
      </div>
    </header>
  );
}

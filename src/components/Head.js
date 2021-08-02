import Logo from '../assets/logo.svg';
import Menu from './Menu.js';

export default function Head({searchItems, menuItems, onSelectItem}) {
  return (
    <>
      <header>
        <div className='LogoAndText'>
          <img src={Logo} className="App-logo" alt="logo" />
          <h1>Restaurante<br/>Pre Amar</h1>
        </div>
      </header>
      <Menu items={menuItems} searchItems={searchItems} onSelect={onSelectItem}/>
    </>
  );
}

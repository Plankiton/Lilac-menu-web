import searchIcon from '../assets/searchIcon.svg';

export default function SearchBar() {
  return (
    <div className="TextInput">
      <input className="TextInput"/>
      <div className="ButtonInput">
        <input className="ButtonInput" type="submit" value=""/>
        <img src={searchIcon} alt="search icon"/>
      </div>
    </div>
  );
}

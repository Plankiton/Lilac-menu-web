import React, {useState} from 'react';
import searchIcon from '../assets/searchIcon.svg';

export default function SearchBar({onSearch}) {
  const [items, setItems] = useState(null);
  return (
    <div className="TextInput">
      <input
        className="TextInput"
        type="text"
        onChange={(e) => {
          setItems(onSearch(e.target.value));
        }}
      />
      <img src={searchIcon} alt="search icon"/>

      <div className="foundItems">
        {items?items.map((i) => i.Name+', '):items}
      </div>
    </div>
  );
}

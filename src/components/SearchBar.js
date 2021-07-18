import {toId} from '../util.js';
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
        {items && items.map((i) => {
          return (<a className="searchingItem" href={toId(i.Name, true)}
            onClick = {() => {
              setItems(null);
            }}
          >
            <div className="searchingItem">
              <img src={i.Image} alt={i.Name+" Image"}/>
              <h2>{i.Name}</h2>
              <p>{i.Desc}</p>
            </div>
          </a>);
        })}
      </div>
    </div>
  );
}

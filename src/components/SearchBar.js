import {toId} from '../util.js';
import React, {useState, useEffect} from 'react';

export default function SearchBar({onSearch, onItemFounds, onSelect}) {
  const [items, setItems] = useState(null);
  const [query, setQuery] = useState(null);
  const [founds, setFounds] = useState(false);

  useEffect(() => {
    console.log(items)
    onItemFounds(founds);
  }, [founds, items, onItemFounds])
  return (
    <div className="SearchBar" id="SearchBar">
      <input
        placeholder="Pesquise"
        className="TextInput"
        type="text"
        onFocus={(e) => {
          if (window.location.hash !== "#SearchBar") {
            window.location.hash = '';
            window.location.hash = "#SearchBar";
            e.target.focus();
          }
        }}
        onChange={async (e) => {
          if (window.location.hash !== "#SearchBar") {
            window.location.hash = '';
            window.location.hash = "#SearchBar";
          }

          setQuery(e.target.value);
          if (e.target.value.length >= 5) {
            var meals = await onSearch(e.target.value);
            console.log(meals);
            if (meals.length > 0) {
              setItems(meals);
            }
          }
        }}
        onKeyDown={async (e) => {
          switch (e.key.toLowerCase()) {
            case 'escape':
              setItems(null);
              break;
            case 'enter':
              window.location.hash = '';
              if (items) {
                window.location.hash = toId(items[0].Name, true);
                setItems(null);
                setQuery(null);
              } else {
                var meals = await onSearch(e.target.value);
                console.log(meals);
                if (meals.length > 0) {
                  setItems(meals);
                }
              }
              break;
            default:
          }
        }}
        value={query}
      />

      {items&&(<div
        className="FoundItems"
        onLoad={(e) => {
          setFounds(true);
        }}>{
          items.map((i, i_pos) => {
            return (<a href={toId(i.Name, true)}
              onClick={() => {
                onSelect(i.cat, i);
                setItems(null);
                setQuery(null);
              }}
              className="Meal"
            >
              <img src={i.Image} alt={i.Name+" Image"}/>
              <div>
                <h2>{i.Name}</h2>
                <p>{i.Desc}</p>
              </div>
            </a>);
          })
        }</div>)}
    </div>
  );
}

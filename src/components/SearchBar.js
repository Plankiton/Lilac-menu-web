import {toId} from '../util.js';
import React, {useState} from 'react';

export default function SearchBar({meals}) {
  const [items, setItems] = useState(null);
  const [query, setQuery] = useState(null);

  function onSearch(text) {
    text = text.toLowerCase().trim();
    if (text === "")
      return;

    var found = [];
    for (var cat of meals) {
      for (var meal of cat) {
        if ( (meal.Name && meal.Name.toLowerCase().indexOf(text) >= 0)
          || (meal.Desc && meal.Desc.toLowerCase().indexOf(text) >= 0)
          || (meal.FullDesc && meal.FullDesc.toLowerCase().indexOf(text) >= 0))
          found.push(meal);
      }
    }

    return found;
  }
  return (
    <div className="SearchBar" id="SearchBar">
      <input
        placeholder="Pesquise"
        className="TextInput"
        type="text"
        onFocus={(e) => {
          window.location.hash = '';
          window.location.hash = "#SearchBar";
          e.target.focus();
        }}
        onChange={(e) => {
          setQuery(e.target.value);
          setItems(onSearch(e.target.value));
        }}
        onKeyDown={(e) => {
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
              }
              break;
            default:
          }
        }}
        value={query}
      />

      {items && (<div className="FoundItems">{
        items.map((i) => {
          return (<a href={toId(i.Name, true)}
            onClick={() => {
              setItems(null);
              setQuery(null);
            }}
            className="SearchingItem"
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

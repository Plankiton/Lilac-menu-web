import SearchBar from './SearchBar.js';
import Item from './Item.js';
export default function Menu({
  items,
  onSearch,
  onItemFounds,
  onSelect,
  onSelectSearch,
  onJumpToEmptyMeal,
}) {
  return (
    <div className="Menu">
      <SearchBar onItemFounds={onItemFounds} onSearch={onSearch} onSelect={onSelectSearch}/>
      <nav className="MenuItems">
        <ul>
          {items&&items.map((item, i) => {
            try {
              return (<Item key={item.id} item={item} onSelect={(selFunc) => selFunc(item, i)}/>);
            } catch {
              return null;
            }
          })}
        </ul>
      </nav>
    </div>
  );
}

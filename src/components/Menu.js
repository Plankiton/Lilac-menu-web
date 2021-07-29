export default function Menu({items, onSelect}) {
  return (
    <nav className="Menu">
      <ul>
        {items.map((item, i) => {
          if ((typeof item) == "string")
            return (<li><a href={`#${item}`}>{item}</a></li>);
          else if ((typeof item) == "function") {
            item = item(i);
          }

          try {
            return (<li key={item.id}>
              <h3><span style={{backgroundColor: item.color, color: item.text}}>
                <a onClick={() => {
                  onSelect(item, i);
                }} href={`#${item.id}`} style={{color: item.text}}>{item.label}</a>
              </span></h3>
            </li>);
          } catch {
            return null;
          }
        })}
      </ul>
    </nav>
  );
}

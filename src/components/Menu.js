export default function Menu({items}) {
  return (
    <nav className="Menu">
      <ul>
        {items.map((item, i) => {
          if ((typeof item) == "string")
            return (<li><a href={`#${item}`}>{item}</a></li>);

          item = item(i);

          try {
            return (<li>
              <span style={{backgroundColor: item.color}}>
                <a href={`#${item.id}`}>{item.label}</a>
              </span>
            </li>);
          } catch {
            return null;
          }
        })}
      </ul>
    </nav>
  );
}

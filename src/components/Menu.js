export default function Menu({items}) {
  return (
    <nav className="Menu">
      <ul>{
        items.map((item, i) => {
          if ((typeof item) == "string")
            return (<li><a href={`#${item}`}>{item}</a></li>);

          item = item(i);

          switch (typeof item) {
            case "Object":
              return (<li>
                <span style={{backgroundColor: item.color}}>
                  <a href={`#${item.color}`}>{item.label}</a>
                </span>
              </li>);
            default:
              return (<li>
                <span style={{backgroundColor: item[2]}}>
                  <a href={`#${item[0]}`}>{item[1]}</a>
                </span>
              </li>);
          }
        })
      }</ul>
    </nav>
  );
}

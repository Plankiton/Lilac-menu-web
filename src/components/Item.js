import {memo, useCallback} from 'react';

export default memo(({item, onSelect}) => {
  const doSelCallback = useCallback(() => {
    onSelect((item, i) => {
      console.log(item);
      if ((typeof item) == "string")
        return (<li><a href={`#${item}`}>{item}</a></li>);
      else if ((typeof item) == "function") {
        item = item(i);
      }
    });
  }, [onSelect]);

  return (<li>
    <h3>
      <span style={{backgroundColor: item.color, color: item.text}}>
        <a onClick={() => {
          console.log(item);
          doSelCallback();
        }} href={`#${item.id}`} style={{color: item.text}}>{item.label}</a>
      </span>
    </h3>
  </li>);
});

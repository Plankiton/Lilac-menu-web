import {toId} from '../util.js';

export default function Meal({scroll, setScroll, pos, length, name, desc, fullDesc, db_id, cat, id, price}) {
  try {
    var image = require(`../assets/${db_id}`).default;
  } catch (e) {
    image = require('../assets/image-not-found.jpg').default;
  }

  return (
    <div>
      <div className="PaddingTop" id={id}>
      </div>
      <div className="Meal">
        <img src={image} alt={name+" Image"}/>
        <div className="Info">
          <h1 className="Name">{name}</h1>
          <h3 className="Desc">{desc}</h3>
          <p className="FullDesc">{fullDesc}</p>
          <h1 className="Price">{price?
              (<><span>R$</span> {price.toFixed(2).replaceAll(',')}</>)
              :null}</h1>
        </div>
      </div>
    </div>
  );
}

export default function Meal({name, desc, fullDesc, image, cat, id, price}) {
  return (
    <div className="Meal" id={id}>
      <img src={image} alt={name+" Image"}/>
      <div className="Info">
        <h1 className="Name">{name}</h1>
        <h3 className="Desc">{desc}</h3>
        <p className="FullDesc">{fullDesc}</p>
        <p className="Price">{price?
            (<>{price.toFixed(2)} <span>$</span></>)
            :null}</p>
      </div>
    </div>
  );
}

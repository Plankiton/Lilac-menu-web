export default function Meal({name, desc, fullDesc, image, cat}) {
  return (
    <div className="Meal">
      <img src={image} alt={name+" Image"}/>
      <div className="MealInfo">
        <h1 className="MealName">{name}</h1>
        <h3 className="MealDesc">{desc}</h3>
        <p className="MealFullDesc">{fullDesc}</p>
      </div>
    </div>
  );
}

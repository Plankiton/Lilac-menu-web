export default function Meal({name, desc, fullDesc, image, cat, id}) {
  return (
    <div className="Meal" id={id}>
      <img src={image} alt={name+" Image"}/>
      <div className="MealInfo">
        <h1 className="MealName">{name}</h1>
        <h3 className="MealDesc">{desc}</h3>
        <p className="MealFullDesc">{fullDesc}</p>
      </div>
    </div>
  );
}

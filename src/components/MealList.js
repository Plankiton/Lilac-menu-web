import Meal from './Meal.js';

export default function MealList({cats, meals}) {
  return (<div className="MealList">
    {cats.map((cat,c) => {
      if ((typeof cat) != "string")
        cat = cat();
      else
        cat = {id: cat, label: cat, color: "#00000000"};

      return (<div key={cat.id} className="Category">
        <h1 className="Category" id={cat.id}>
          <span style={{backgroundColor: cat.color}}>
            <a href={`#${cat.id}`}>{cat.label}</a>
          </span>
        </h1>
        <div className="Meals">{meals[c].map(meal => {
          return (<Meal key={meal.name+meal.Cat} image={meal.Image} name={meal.Name} desc={meal.Desc} fullDesc={meal.FullDesc} cat={meal.Cat}/>);
        })}</div>
      </div>);
    })}
  </div>);
}

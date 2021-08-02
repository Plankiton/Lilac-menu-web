import {toId} from '../util.js';
import Meal from './Meal.js';

export default function MealList({cats, meals, selected}) {
  return (<div className="MealList">
    {cats&&cats.map((cat,c) => {
      if ((typeof cat) == "function")
        cat = cat(c);
      else if ((typeof cat) == "string")
        cat = {id: cat, label: cat, color: "#00000000"};
      if (cat.sel && selected && cat.id !== selected.id)
        cat.color = cat.sel;

      return (<div key={cat.id} id={cat.id} className="Category">
        <h1 className="CategoryTitle">
          <span style={{backgroundColor: cat.color}}>
            <a href={`#${cat.id}`} style={{color: cat.text}}>{cat.label}</a>
          </span>
        </h1>
        <div className="Meals">{meals&&meals[c].map((meal, pos) => {
          return (<Meal
            cat={meal.Cat}
            name={meal.Name}
            desc={meal.Desc}
            image={meal.Image}
            fullDesc={meal.FullDesc}
            price={meal.Price}

            id={toId(meal.Name)}
            key={toId(meal.Name)}
            />);
        })}</div>
      </div>);
    })}
  </div>);
}

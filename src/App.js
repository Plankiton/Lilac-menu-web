import './App.css';

import {useState} from 'react';
import {toId, api} from './util.js';

import Footer from './components/Footer.js';
import Head from './components/Head.js';
import MealList from './components/MealList.js';

function App() {
  const [sel, setSel] = useState(null);
  const [cats, setCats] = useState(null);
  const [meals, setMeals] = useState(null);

  return (
    <div className="App" onLoad={() => {
      api.get("/?page=1&limit=10").then(res => {
        var cats = [];
        var meals = [];

        var i = 0;
        for (var cat of res.data) {
          meals.push([]);
          cats.push({color: "var(--back)", text: "var(--fore)", label: cat.name, id: toId(cat.name)})
          for (var meal of cat.meals) {
            meals[i].push({...meal, cat: i});
          }

          i++;
        }

        setCats(cats);
        setMeals(meals);
        console.log(cats, meals);
      }).catch((e) => {
        console.log("ESTA PORRA AQUI: ", e);
      })
      }}>
      <Head searchItems={meals} menuItems={cats} onSelectItem={(item, i) => {
        setSel(item);
      }}/>

      <div className="Content">
        <MealList cats={cats&&cats.map(cat => {
          return {...cat, color: "var(--back2)", text: "var(--fore2)"};
        })} meals={meals} selected={sel}/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

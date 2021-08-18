import './App.css';

import {useState} from 'react';
import {toId, api} from './util.js';

import Footer from './components/Footer.js';
import Head from './components/Head.js';
import MealList from './components/MealList.js';

function GetCatDataPage({page, onGetCat, onGetMeals, catId}) {
  api.get("/cat/"+ (catId?String(catId):"") +"?"+ (page?String(page):"1") +"&limit=99999").then(res => {
    var cat = res.data
    var meals = [];

    for (var meal of cat.meals) {
      meals.push({...meal, cat: cat.db_id});
    }

    onGetMeals(meals);
  }).catch((e) => {
    console.log("ESTA PORRA AQUI: ", e);
  })
}

function GetCats({page, onGetCats, onGetMeals}) {
  api.get("/cats").then(res => {
    var cats = [];
    var meals = [];

    for (var cat of res.data) {
      meals.push([]);
      cats.push({color: "var(--back)", text: "var(--fore)", label: cat.name, id: toId(cat.name)})
    }

    onGetCats(cats);
  }).catch((e) => {
    console.log("ESTA PORRA AQUI: ", e);
  })
}

function App() {
  const [sel, setSel] = useState(null);
  const [cats, setCats] = useState(null);
  const [meals, setMeals] = useState(null);
  const [catPage, setCatPage] = useState({});
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="App" onLoad={() => {
      if (!loaded) {
        GetCats({
          page: 1,
          onGetCats: (cats) => setCats(cats),
          onGetMeals: (meals) => {
            setMeals(meals);
            setLoaded(true);
          }
        });
      }
    }}>
      <Head searchItems={meals} menuItems={cats} onSelectItem={(item, i) => {
        setSel(item);
      }}/>

      <div className="Content">
        <MealList
          cats={cats&&cats.map((cat, index) => {
            return {...cat, color: "var(--back2)", text: "var(--fore2)", index};
          })}
          onCatScrollEnd={(cat) => {
            setCatPage({...catPage, cat: catPage[cat.index]+1});
            GetCatDataPage({
              cat: cat.db_id,
              page: catPage[cat.index],
              onGetCat: (new_cat) => setCats({...cats, new_cat}),
              onGetMeals: (new_meals) => {
                var mealsf = meals;
                for (var meal of meals) {
                  mealsf[new_meals[0].cat-1].push(meal);
                }
                setMeals(mealsf);
              }
            })
          }}
          meals={meals} selected={sel}/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

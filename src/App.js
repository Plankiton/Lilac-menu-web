import './App.css';

import React, {useState} from 'react';
import {toId, api} from './util.js';

import Footer from './components/Footer.js';
import Head from './components/Head.js';
import Menu from './components/Menu.js';
import MealList from './components/MealList.js';

function getMeals({page, omeals, ocats, setMeals, setCats, lock, setLock}) {
  if (!lock) {
    setLock(true);

    api.get(`/meals/?page=${page}`).then(res => {
      var cats = ocats?ocats:[];
      var meals = omeals?omeals:[];

      var i = cats.length;
      for (var cat of res.data) {
        meals.push([]);
        cats.push({...cat, color: "var(--back)", text: "var(--fore)", label: cat.name, id: toId(cat.name), page})
        for (var meal of cat.meals) {
          meals[i].push({...meal, cat: i});
        }

        i++;
      }

      setCats(cats);
      setMeals(meals);
      setLock(false);
    }).catch((e) => {
      console.log("ESTA PORRA AQUI: ", e);
    })
  }
}

function getMealsFromCat({cat, setMeals, omeals, lock, setLock}) {
  if (!lock) {
    setLock(true);

    api.get(`/cat/${cat.db_id}/meals?page=${cat.page}&limit=10`).then(res => {
      var meals = omeals?omeals:[];

      for (var meal of res.data.meals) {
        meals[cat.index].push({...meal, cat: cat.index});
        if (meals.length >= cat.meal_count)
        meals[cat.index][meals[cat.index].length-1] = {charging: false};
      }

      setMeals(meals);

      setLock(false);
    }).catch((e) => {
      console.log("ESTA PORRA AQUI: ", e);
    })
  }
}

function App() {
  const [sel, setSel] = useState(null);
  const [page, setPage] = useState(1);
  const [cats, setCats] = useState(null);
  const [meals, setMeals] = useState(null);

  const [lock, setLock] = useState(false);

  return (
    <div className="App"
      onLoad={() => {
        if (!meals) {
          getMeals({
            page: page,
            ocats: cats,
            omeals: meals,

            setCats,
            setMeals,
            lock,
            setLock,
          });

          setMeals(meals);
        }
      }}>
      <Head/>
      <Menu items={cats} onSearch={() => {}} onSelect={(item, i) => {
        setSel(item);
      }}/>

      <div className="Content">
        <MealList
          onSetCats={(cat, cats) => {
            if (meals[cat.index].length < cat.meal_count) {
              setCats(cats);
            }
          }}
          onCatScrollEnd={async (cat) => {
            if (meals[cat.index].length < cat.meal_count) {
              await getMealsFromCat({
                lock: lock,
                setLock: setLock,

                omeals: meals,
                meal_count: cat.meal_count,

                cat,
                setMeals: (meals) => {
                  var ncats = cats;
                  ncats[cat.index].page += 1;
                  setCats(ncats);
                  setMeals([...new Set(meals)]);
                },
              })
            }
          }}
          cats={cats&&cats.map(cat => {
            return {...cat};
          })}
          meals={meals} selected={sel}/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

import './App.css';

import {useState} from 'react';
import {toId, api} from './util.js';

import Footer from './components/Footer.js';
import Head from './components/Head.js';
import MealList from './components/MealList.js';

import sangueJoao from './assets/sangueJoao.jpg';
import joao from './assets/joao.jpg';
import pizzaJoao from './assets/pizzaJoao.jpg';

var cats = ["Bebidas", "Carnes", "Pizzas"].map(name => (
  i => {
    var text = 'var(--fore)';
    var color = 'var(--back)';
    var id = toId(name);
    var label = name;

    return {id, label, color, text};
  }
))

var meals = [
  [
    {
      Id: 1,
      Name: "Sangue de Joao",
      Image: sangueJoao,
      Desc: "Sangue do humano chamado Joao.",
      FullDesc: "Sangue humano destilado e misturado com açucares e frutas vermelhas batidas.",
      Price: 72.50,
    },
  ],
  [
    {
      Name: "Joao",
      Image: joao,
      Desc: "Humano de nome Joao mal passado.",
      FullDesc: "Carne humana mal passada, picada com molho verde.",
      Price: 145.00,
    },
  ],
  [
    {
      Name: "Pizza de Joao",
      Image: pizzaJoao,
      Desc: "Humano de nome Joao preparado em massa redonda.",
      FullDesc: "Humano cortado em rodelas, molho de sangue do mesmo humano, queijo, ajeitona, oregano.",
      Price: 50.00,
    },
  ],
];

api.get("/").then(res => {
  console.log(res);
}).catch((e) => {
  console.log("ESTA PORRA AQUI: ", e);
})

function App() {
  const [sel, setSel] = useState(null);
  return (
    <div className="App">
      <Head searchItems={meals} menuItems={cats} onSelectItem={(item, i) => {
        setSel(item);
      }}/>

      <div className="Content">
        <MealList cats={cats.map((cat, c) => {
          cat = cat(c);
          return {...cat, color: "var(--back2)"};
        })} meals={meals} selected={sel}/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

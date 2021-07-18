import './App.css';

import Footer from './components/Footer.js';
import Head from './components/Head.js';
import Menu from './components/Menu.js';
import MealList from './components/MealList.js';

import sangueJoao from './assets/sangueJoao.jpg';
import joao from './assets/joao.jpg';
import pizzaJoao from './assets/pizzaJoao.jpg';

var cats = ["Bebidas", "Carnes", "Pizzas"].map(name => (
  i => {
    var color = `#${i}${i+i}${i+i+i}`;
    var id = name;
    var label = name;

    return {id, label, color};
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
    },
  ],
  [
    {
      Name: "Joao",
      Image: joao,
      Desc: "Humano de nome Joao mal passado.",
      FullDesc: "Carne humana mal passada, picada com molho verde.",
    },
  ],
  [
    {
      Name: "Pizza de Joao",
      Image: pizzaJoao,
      Desc: "Humano de nome Joao preparado em massa redonda.",
      FullDesc: "Humano cortado em rodelas, molho de sangue do mesmo humano, queijo, ajeitona, oregano.",
    },
  ],
];

function App() {
  return (
    <div className="App">
      <Head onSearch={(text) => {
        text = text.toLowerCase().trim();
        if (text === "")
          return;

        var found = [];
        for (var cat of meals) {
          for (var meal of cat) {
            if ( meal.Name.toLowerCase().indexOf(text) >= 0
              || meal.Desc.toLowerCase().indexOf(text) >= 0
              || meal.FullDesc.toLowerCase().indexOf(text) >= 0 )
              found.push(meal);
          }
        }

        return found;
      }}/>

      <div className="Content">
        <Menu items={cats}/>
        <MealList cats={cats} meals={meals}/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

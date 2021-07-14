import './App.css';

import Footer from './components/Footer.js';
import Head from './components/Head.js';
import Menu from './components/Menu.js';
import Meal from './components/Meal.js';

import sangueJoao from './assets/sangueJoao.jpg';
import joao from './assets/joao.jpg';
import pizzaJoao from './assets/pizzaJoao.jpg';

var items = ["Bebidas", "Carnes", "Pizzas"].map(name => (
  i => {
    var color = `#${i}${i+i}${i+i+i}`;
    var id = name;
    var label = name;

    return {id, label, color};
  }
))

var meals = [
  [{
    Name: "Sangue de Joao",
    Image: sangueJoao,
    Desc: "Sangue do humano chamado Joao.",
    FullDesc: "Sangue humano destilado e misturado com açucares e frutas vermelhas batidas.",
  }],
  [{
    Name: "Joao",
    Image: joao,
    Desc: "Humano de nome Joao mal passado.",
    FullDesc: "Carne humana mal passada, picada com molho verde.",
  }],
  [{
    Name: "Pizza de Joao",
    Image: pizzaJoao,
    Desc: "Humano de nome Joao preparado em massa redonda.",
    FullDesc: "Humano cortado em rodelas, molho de sangue do mesmo humano, queijo, ajeitona, oregano.",
  }],
];

function App() {
  return (
    <div className="App">
      <Head/>
      <div className="Content">
        <Menu items={items}/>
        {items.map((cat,c) => {
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
      </div>
      <Footer/>
    </div>
  );
}

export default App;

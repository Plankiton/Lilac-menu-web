import './App.css';

import Footer from './components/Footer.js';
import Head from './components/Head.js';
import Menu from './components/Menu.js';

var items = ["Bebidas", "Carnes", "Pizzas"].map(name => (
  i => {
    var color = `#${i}${i+i}${i+i+i}`;
    var id = name;
    var label = name;

    return {id, label, color};
    // return [id, label, color];
    // return {id:id, label:label, color:color};
  }
))

function App() {
  return (
    <div className="App">
      <Head/>
      <div className="Content">
        <Menu items={items}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

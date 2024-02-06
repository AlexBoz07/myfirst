import './App.css';
import Encabezamiento from './Componentes/Compartido/Encabezamiento';
import Footer from './Componentes/Compartido/Footer';
import Principal from './Componentes/Compartido/Principal';

function App() {
  return (
    <div className="App">
      <Encabezamiento />
      <Principal />
      <Footer />
    </div>
  );
}

export default App;

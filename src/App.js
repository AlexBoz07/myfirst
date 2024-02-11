import './App.css';
import Encabezado from './Componentes/Compartido/Encabezado';
import Footer from './Componentes/Compartido/Footer';
import Principal from './Componentes/Compartido/Principal';
import Metas from './Componentes/Lista/Metas';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Principal >
      <Metas />
      </Principal>
      <Footer />
    </div>
  );
}

export default App;

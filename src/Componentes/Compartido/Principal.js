import estilos from '../Compartido/Principal.module.css';
import Vinculo from './Vinculo';
import {ReactComponent as NuevaSVG } from './img/Nueva.svg';
import {ReactComponent as ListaSVG } from './img/Lista.svg';
function Principal({ children }) {
  return (
    <>
    <div className={estilos.principal}>
        <aside className={estilos.menu}>
            <Vinculo href="/lista" 
            texto="Lista de Metas" 
            Icono={ListaSVG} />
            
            <Vinculo href="/nueva" 
            texto="Nueva Meta" Icono={NuevaSVG}/>
        </aside>  
        <main className="main" >{children}</main>
      </div>
    </>
  );
}

export default Principal;

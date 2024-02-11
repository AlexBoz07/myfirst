import { ReactComponent as LogoSVG } from '../Compartido/img/Logo.svg';
import { ReactComponent as PerfilSVG } from '../Compartido/img/Perfil.svg';
import estilos from '../Compartido/Encabezado.module.css';
import Vinculo from './Vinculo';
function Encabezado() {
  return (
    <header className={estilos.contenedor}>
        <div className={estilos.titulo} >
          <LogoSVG className={estilos.logo} />
          <a href="#" className='texto'>METAS BOZ</a>
        </div>
        <nav>
        < Vinculo href="/perfil" 
            Icono={PerfilSVG} />
        </nav>
    </header>
  );
}

export default Encabezado;

import img from './tableta.png';

function Encabezamiento() {
  return (
    <div>
        <div>
            <img src={img} alt="logo"/>
                <a href="#">METAS</a>
        </div>
        <nav>
            <a href="/perfil">Perfil</a>
        </nav>
    </div>
  );
}

export default Encabezamiento;

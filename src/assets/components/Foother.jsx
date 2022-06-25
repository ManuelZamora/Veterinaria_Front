import React from "react";
import "../css/Foother.css";
import logo from "../img/LogoTransparente.png";

class Foother extends React.Component {


    render(){
        return(
         <footer class="pie-pagina">
           
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="#">
                        <img src={logo} className="rounded" alt="Cinque Terre Logo de SLee Dw" />
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            </div>
            <div class="box">
                <h2>SIGUENOS</h2>
                <div class="red-social">
                    <p>Ruben Hernandez Barraza</p>
                    <p>Ruben Hernandez Barraza</p>
                    <p>Ruben Hernandez Barraza</p>
                    <p>Ruben Hernandez Barraza</p>
                    <p>Ruben Hernandez Barraza</p>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2021 <b>SLee Dw</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
        );

    }
    
}

export default Foother;
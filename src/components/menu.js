import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// Descomente esto para poder editar los css
 import './menu.css'

export default class Menu extends Component {

    render() {
        return (
            <div className = "navigation col-lg-1">
                <nav id="navigation">
                    <Link to={'/clases'}>
                        <img src =  "/img/Clases2.png " alt = "Clases" height="50px"></img>
                        <p>Clases</p> 
                    </Link>        
                   
                    <Link to={'/instructores'}>
                        <img src =  "/img/Instructores2.png " alt = "Instructores" height="50px"></img>
                        <p>Instructores</p>        
                    </Link>

                    <Link to={'/alumnos'}>
                        <img src =  "/img/Alumnos2.png " alt = "Alumnos" height="50px"></img> 
                        <p>Alumnos</p>         
                    </Link>

                    <Link to={'/alumnos'}>
                        <img src =  "/img/Exit2.png " alt = "Exit" height="50px"></img>
                        <p>Cerrar sesion</p>          
                    </Link>
                </nav>
            </div>
        );
    }
}
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './clases.css'

export default class Clases extends Component {

    state = {clases: []}

    componentDidMount() {
      fetch("/clases")
        .then(res => res.json())
        .then(clases =>
          this.setState({ clases })
        );
    }

    render() {
        
        return (
          // <div class="col-lg-11">
          //   <div class="col-lg-6">
              <div className="Clases">
                <h2>Clases</h2>
                <Link to="/addClases">Agregar Clase</Link>
                <table>
                  {this.state.clases.map(clase => (
                    <div key={clase.id}>
                      <tr>
                        <td>{clase.dia}</td>
                        <td>{clase.hora}</td>
                        <td>{clase.instructor_nombre}</td>

                        <td>

                      <form method="post" action="/clases/eliminarClase" name="eliminarClase">
                      <button type="submit" onClick={() => {alert("Clase Eliminada")}} name="clase_id"  value={clase.id}>Eliminar</button>
                      </form>


                      </td>
                      <td>
                        <Link to={"/clases/" + clase.id}>

                         <button>Más Información</button>
                        </Link>
                      </td>
                      </tr>
                    </div>
                  ))}
                </table>
                
              </div>
          //   </div>
          // </div>
        );
    }
}


import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './instructores.css'

export default class Instructores extends Component {

    state = {instructores: []}

    componentDidMount() {
        fetch('/instructores')
          .then(res => res.json())
          .then(instructores => this.setState({ instructores }));
    }



    render() {
        return (
          <div className="Instructores">
            <h2>Instructores</h2>
            <Link to="/addInstructor">Agregar Instructor</Link>
            <div>
              {this.state.instructores.map(instructor => (
                <div key={instructor.id}>
                  <tr>
                    <td>{instructor.nombre}</td>
                    <td>{instructor.telefono}</td>
                    <td>{instructor.correo}</td>
                    <td>{instructor.clabe}</td>

                    <td>

                      <form method="post" action="/instructores/eliminarInstructor" name="eliminarInstructor">
                      <button type="submit" name="instructor_id" onClick={() => {alert("Instructor Eliminado")}} value={instructor.id}>Eliminar</button>
                      </form>

                      </td>
                  </tr>
                </div>
              ))}
            </div>
          </div>
        );
    }
}
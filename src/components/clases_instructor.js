import React,{Component} from 'react';
import Nalumnos from './nalumnos';

export default class ClasesInstructor extends Component {

    state ={clases : []}

    componentDidMount(){
        var url = "/instructores/clasesInstructor" + this.props.instructor_id;
        fetch(url)
        .then (res => res.json())
        .then(clases => this.setState({clases}));
    }

    render() {
        return (
            <div className="clases-instructor">
                <table>
                    <tr>
                        <th>Clave</th>
                        <th>Hora</th>
                        <th>Día</th>
                        <th>No. Alumnos</th>
                    </tr>
                    {this.state.clases.map(clase =>(
                        <tr>
                            <td>{clase.clase_id}</td>
                            <td>{clase.hora}</td>
                            <td>{clase.dia}</td>
                            <td><Nalumnos clase_id = {clase.clase_id}/></td>
                        </tr>
                    ))}

                </table>
            </div>
        );
    }
}
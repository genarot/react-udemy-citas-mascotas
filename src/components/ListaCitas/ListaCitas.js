import React,{Component} from 'react';
import Cita from '../Cita';

export default class ListaCitas extends Component {

    render() {
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length > 0 ? 'Administra tus citas' : 'Agrega citas para comenzar';
        return (
            <div className="card mt-5 p-5 m-5">
                <h2 className="card-title text-center" >{mensaje}</h2>
                <div className="lista-citas">
                    {
                        Object.keys(this.props.citas).map( key => <Cita key={key} idCita={key} info={this.props.citas[key]} borrarCita={this.props.borrarCita}/>)
                    }
                </div>
            </div>
        );
    }
}
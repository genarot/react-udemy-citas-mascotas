import React,{Component} from 'react';

export default class Cita extends Component {
    borrarCita = () => {
        console.log(this.props.idCita);
                // this.props.borrarCita(this.props.idCita)
    }
    render() {
        const {fecha,hora,mascota, propietario, sintomas} = this.props.info;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><span>Nombre Dueño:</span>: {propietario}</p>
                    <p className="card-text"><span>Fecha:</span>{fecha}</p>
                    <p className="card-text"><span>Hora:</span> {hora}</p>
                    <p className="card-text"><span>Sintomas:</span> {sintomas}</p>
                    <button className="btn btn-danger" onClick={ () => this.props.borrarCita(this.props.idCita) }>Borrar &times;</button> 
                </div>
            </div>
        );
    }
}
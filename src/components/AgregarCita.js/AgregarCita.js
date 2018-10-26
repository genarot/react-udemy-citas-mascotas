import React,{Component} from 'react';

export default class Agregarcita extends Component {

    nombreMascotaRef = React.createRef();
    nombreDuenoRef  = React.createRef();
    telefonoRef     = React.createRef();
    fechaRef        = React.createRef();
    horaRef         = React.createRef();
    sintomasRef     = React.createRef();
    
    crearNuevaCita = (e) => {
        e.preventDefault();

        const nuevaCita = {
            mascota: this.nombreMascotaRef.current.value,
            propietario: this.nombreMascotaRef.current.value,
            telefono: this.telefonoRef.current.value,
            fecha: this.fechaRef.current.value, 
            hora:   this.horaRef.current.value,
            sintomas: this.sintomasRef.current.value
        }

        
        this.props.crearCita(nuevaCita);
        e.currentTarget.reset();
    }


    render() {
        return (
            <div className="card mt-5 p-5 m-5">
                    <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                    <form onSubmit={this.crearNuevaCita}>
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota:</label>
                                <div className="col-sm-4 col-lg-10">
                                    <input type="text" ref={this.nombreMascotaRef} id="mascota" className="form-control" placeholder="Nombre Mascota" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño:</label>
                                <div className="col-sm-4 col-lg-10">
                                    <input type="text" id="cliente" ref={this.nombreDuenoRef} className="form-control"  placeholder="Nombre Dueño de la Mascota" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                    <label className="col-sm-4 col-lg-2 col-form-label">Teléfono:</label>
                                    <div className="col-sm-4 col-lg-10">
                                        <input type="tel" id="telefono" ref={this.telefonoRef} className="form-control"  placeholder="Número de Teléfono" required/>
                                    </div>
                                </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Fecha:</label>
                                <div className="col-sm-4 col-lg-10">
                                    <input type="date" id="fecha" ref={this.fechaRef} className="form-control" required/>
                                </div>
                            </div>

                             <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Hora:</label>
                                <div className="col-sm-4 col-lg-10">
                                    <input type="time" id="hora" ref={this.horaRef} className="form-control" required/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Sintomas:</label>
                                <div className="col-sm-4 col-lg-10">
                                    <textarea id="sintomas" ref={this.sintomasRef} className="form-control" required></textarea>
                                </div>
                            </div>
                            <div className="form-group row justify-content-end">
                                <div className="col-sm-3">
                                    <button type="submit" className="btn btn-success w-100">Agregar</button>
                                </div>
                            </div>
                    </form>
            </div>
        );
    }
}
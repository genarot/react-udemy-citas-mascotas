import React, { Component } from 'react';
import Header from '../Header';
import Agregarcita from '../AgregarCita.js';
import ListaCitas from '../ListaCitas';

class App extends Component {
    // state = {
    //     citas: {cita1540588379918:{ fecha: "2018-12-31",hora: "01:00", mascota: "Odie", propietario: "Odie", sintomas: "addad", telefono: "2322316"}, 
    //           cita154058837251: {mascota: "Mongo", propietario: "Odie", telefono: "2322316", fecha: "2018-12-31", hora: "01:00",sintomas: "Diarrea"}}
    // }
    state = {
      citas: {}
    }
    componentDidMount() {
      console.log('mounted');
        if ( localStorage.getItem('citas') === null) {
          this.setState({citas: {}});
        } else {
          this.setState({citas: JSON.parse(localStorage.getItem('citas'))})
        }
    }

    componentDidUpdate() {
      console.log('updatee!!!');
        localStorage.setItem( 'citas', JSON.stringify(this.state.citas))
    }
    crearCita = (cita) => {
      const citas = {...this.state.citas};

      console.log(this.state.citas);
      
      citas[`cita${Date.now()}`] = cita;

      this.setState({
        citas: citas
      })
      
      console.log(cita);
      
    }

    borrarCita = ( id ) => {
      console.log(id);
      let citas ={...this.state.citas};

      delete citas[id];

      this.setState({
        citas:citas
      })
    }

    render() {
      
      return (
        <div className="App">
          <Header titulo={'Administrador de Pacientes Veterinaria'} />

          <div className="row" >
            <div className="col-md-6">
              <Agregarcita  crearCita={this.crearCita}/>
            </div>
            <div className="col-md-6">
              <ListaCitas  citas={this.state.citas} borrarCita={this.borrarCita }/>
            </div>
          </div>
        </div>
      );
    }
}
export default App;
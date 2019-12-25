import React, { Component } from 'react';

//COMPONENTES
import BtnRounded from '../../Components/Content/BtnRounded.jsx';
import NuevoCliente from '../../Views/Nuevo_Cliente.jsx';

// IMAGENES
import imgCarteraClientes from '../img/CarteraClientes.png';
import imgCobrar from '../img/Cobrar.png';
import imgEstadoSolicitud from '../img/EstadoSolicitud.png';
import imgNuevoCliente from '../img/NuevoUsuario.png';
import imgSolicitarDinero from '../img/SolicitarDinero.png';
import Logo from '../img/Logo.png';

// BOOTSTRAP
import Navbar from '../../Components/Layout/Navbar.jsx';

// CSS
import '../css/Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,            //Especifica si el usuario está logeado.
            userId: '',                 //Id de usuario
            userType: 0,                //Tipo de usuario 0- cobrador; 1- Administrador
            userName: 'Daniel',               //Nombre del usuario
            userActive: false,          //Especifica si el usuario está activo
            guiOption: 5,               //Especifica la interfaz donde se encuentra
            shortDate: '',              //Fecha corta
        };

        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {

        this.setState({
            guiOpcion: 5
        });
        console.log('CONSOLA: ' + id + "-> " + this.state.guiOption);
    }

    render() {
        switch (this.state.guiOption) {
            case 0:
                return (
                    <div>
                        <Navbar setLogo={Logo} setTitle={this.state.userName} setDate={true} />

                        <BtnRounded id='1' src={imgCarteraClientes} event={this.handleClick} texto="Cartera de clientes" />
                        <BtnRounded id='2' src={imgCobrar} event={this.handleClick} texto="Cobrar" />
                        <BtnRounded id='3' src={imgSolicitarDinero} event={this.handleClick} texto="Solicitar dinero" />
                        <BtnRounded id='4' src={imgEstadoSolicitud} event={this.handleClick} texto="Estado de solicitudes" />
                        <BtnRounded id='5' src={imgNuevoCliente} event={this.handleClick} texto="Nuevo cliente" />
                    </div>
                );
            case 1:
                return (null);
            case 2:
                return (null);
            case 3:
                return (null);
            case 4:
                return (null);
            case 5:
                return (
                    <NuevoCliente />
                );
        }
    }
}

export default Dashboard;
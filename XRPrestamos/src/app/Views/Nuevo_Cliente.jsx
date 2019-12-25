import React, { Component } from 'react';
import Navbar from '../Components/Layout/Navbar.jsx';
import { Title } from '../Components/Content/Title.jsx';
import { TextBox } from '../Components/Form/TextBox.jsx';
import { TextTelefono } from '../Components/Form/TextTelefono.jsx';
import { Option } from '../Components/Form/Option.jsx';
import { TextEmail } from '../Components/Form/TextEmail.jsx';

import Logo from '../Views/img/Logo.png';
import './css/NuevoCliente.css';

class Nuevo_Cliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personal: {
                nombre: '',
                apaterno: '',
                amaterno: '',
                curp: '',
                direccion: '',
                referencias: '',
                celular: '',
                email: '',
                tipo_casa: '',
            },
            negocio: {
                nombre: '',
                tipo: '',
                direccion: '',
                referencias: '',
                celular: '',
                email: '',
                local_ambulante: false,
                tipo_local: '',
            }
        };
    }

    render() {
        return (
            <div>
                <Navbar setLogo={Logo} setTitle="Nuevo Cliente" />
                <div className="container">
                    <div className="row" >
                        <Title title="DATOS PERSONALES" />

                        <TextBox id="p_nombre" label="Nombre" holder="Nombre del cliente" help="" required={true} />
                        <TextBox id="p_apaterno" label="A. Paterno" holder="Apellido paterno" help="" required={true} />
                        <TextBox id="p_amaterno" label="A. Materno" holder="Apellido materno" help="" required={true} />

                        <TextBox id="p_curp" label="CURP" holder="Clave unica de registro de población" help="" required={true} />
                        <TextBox id="p_direccion" label="Dirección" holder="Dirección" help="" required={true} />
                        <TextBox id="p_referencia" label="Referencia" holder="Referencia" help="" required={true} />

                        <TextTelefono id="p_telefono" label="Telefono" holder="Telefono" help="" required={false} />
                        <TextEmail id="p_email" label="Correo electrónico" holder="Correo electrónico" help="" required={false} />
                        <div className="btn-group form-group col-xs-12 col-sm-4 col-lg-3" data-toggle="buttons">
                            <Option id="p_casarentada" label="Casa rentada" checked={true} name="p_casa" />
                            <Option id="p_casapropia" label="Casa propia" checked={false} name="p_casa" />
                        </div>


                        <Title title="DATOS DEL NEGOCIO" />

                        <TextBox id="n_nombre" label="Nombre del Negocio" holder="Nombre del Negocio" help="" required={true} />
                        <TextBox id="n_tipoactividad" label="Tipo Negocio (Pozoleria...)" holder="Tipo Negocio (Pozoleria...)" help="" required={true} />
                        <TextBox id="n_direccion" label="Dirección" holder="Dirección" help="" required={true} />
                        <TextBox id="n_referencia" label="Referencia" holder="Referencia" help="" required={true} />

                        <TextTelefono id="n_telefono" label="Telefono" holder="Telefono" help="" required={false} />
                        <TextEmail id="n_email" label="Correo electrónico" holder="Correo electrónico" help="" required={false} />
                        <div className="btn-group form-group col-xs-12 col-sm-4 col-lg-3" data-toggle="buttons">
                            <Option id="n_localfijo" label="Local Fijo" checked={true} name="p_tipolocal" />
                            <Option id="n_localambulante" label="Local Ambulante" checked={false} name="p_tipolocal" />
                        </div>
                        <div className="btn-group form-group col-xs-12 col-sm-4 col-lg-3" data-toggle="buttons">
                            <Option id="n_localpropio" label="Local propio" checked={true} name="p_tipolocal2" />
                            <Option id="n_localrentado" label="Local rentado" checked={false} name="p_tipolocal2" />
                            <Option id="n_empleado" label="Empleado" checked={false} name="p_tipolocal2" />
                        </div>

                    </div>
                    <div className="row nuevocliente_guardar">
                        <button className="btn btn-success col-xs-12 col-sm-12 col-lg-3" >Guardar</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Nuevo_Cliente;
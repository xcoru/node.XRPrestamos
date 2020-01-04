import React, { Component } from 'react';

//COMPONENTES ------------------------------
import { TextBox } from '../../Components/Form/TextBox/TextBox.jsx';
import { TextPassword } from '../../Components/Form/TextPassword/TextPassword.jsx';
import { BtnSubmit } from '../../Components/Form/BtnSubmit/BtnSubmit.jsx';




import './Login.css';


//PROPIEDADES ------------------------------
//setLogo | setTitle | setDate

class Login extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="contenedor">
                <div className="column p-0 justify-content-center login">
                    <div className="row justify-content-center m-0 login_title">
                        <h3>Login</h3>
                    </div>
                    <div className="row justify-content-center m-0 login_body">
                        <TextBox id="txtuser" label="Usuario" holder="Nombre del usuario" required={true} col={12} />
                        <TextPassword id="txtpassword" label="Contraseña" holder="Contraseña" required={true} col={12}/>
                        <BtnSubmit id="btnenviar" label="Entrar" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
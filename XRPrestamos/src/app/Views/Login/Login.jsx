// DEPENDENCIES ----------------------------------------------------------------------
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//COMPONENTS -------------------------------------------------------------------------
import TextBox from '../../Components/Form/TextBox/TextBox.jsx';
import { TextPassword } from '../../Components/Form/TextPassword/TextPassword.jsx';
import { BtnSubmit } from '../../Components/Form/BtnSubmit/BtnSubmit.jsx';
import './Login.css';

const keys = require('../../../keys');
const enc = require('../../../cipher');


//PROPIEDADES ------------------------------
//setLogo | setTitle | setDate

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: null,
            user: null,
            hash: null
        };

        this.enviar = this.enviar.bind(this);
    }

    enviar() {
        var usuario = document.getElementById('txtusuario').value;
        var password = document.getElementById('txtpassword').value;

        var e_user = encodeURI(enc.encode(keys.security.client_password, usuario));
        var e_pass = encodeURI(enc.encode(keys.security.client_password, password));

        var url = 'http://' + keys.database.host + '/api/login?usr=' + e_user + '&pwd=' + e_pass;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error(error))
            .then(response => this.setState(response));

        if (this.state.hash != null) {
            sessionStorage.setItem('login', this.state.login);
            sessionStorage.setItem('user', this.state.user);
            sessionStorage.setItem('hash', this.state.hash);
        }
    }

    render() {

        if (sessionStorage.getItem('login') == true && (this.state.login == false || this.state.login == null)) {
            this.setState({
                'login': true,
                'user': sessionStorage.getItem('user'),
                'hash': sessionStorage.getItem('hash')
            });
        }

        if (this.state.login == true) {
            return (
                <Redirect
                    from="/"
                    to="/dashboard" />
            );
        } else if (this.state.login == false) {
            this.setState({ login: null })
            alert("Datos incorrectos!");
        }

        return (
            <div className="contenedor" >
                <div className="column p-0 justify-content-center login login_body">
                    <div className="row justify-content-center m-0 login_title">
                        <h3>Login</h3>
                    </div>
                    <div className="row justify-content-center m-0 my-3 login_body">
                        <TextBox id="txtusuario" label="Usuario" holder="Nombre del usuario" required={true} col={12} />
                        <TextPassword id="txtpassword" label="Contraseña" holder="Contraseña" required={true} col={12} />

                        <BtnSubmit id="btnenviar" url="#" label="Entrar" evento={this.enviar} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
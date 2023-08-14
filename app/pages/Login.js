import React from 'react';
import bd from "../utils/invokeBackend";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;

        // Validar que los campos no estén vacíos
        if (username.trim() === '' || password.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

    };

    render() {
        const { username, password } = this.state;

        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-center"> <h4> Login </h4> </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} className="row justify-content-center">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            value={username}
                                            onChange={this.handleInputChange.bind(this)}
                                            onBlur={this.validateUserName.bind(this)}
                                        />
                                        <br/>
                                        <div className='label-error' ref={self => this.label = self}/>                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={password}
                                            onChange={this.handleInputChange.bind(this)}
                                        />
                                    </div>
                                    <button onClick={this.initSesion.bind(this)} type="submit" className="btn btn-primary col-6 mx-auto" style={{margin:"6%",padding:"2%"}}>
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    validateUserName(){
        let user = this.state.username

        bd.getInvocation(`/users/validateUserName/${user}`,
            data => {
                this.label.innerHTML = ''
            },
            error => {
                this.label.innerHTML = "El Usuario no Existe"
            }

        )
    }

    initSesion(){
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        bd.posInvocation(`/users/login`, user, data =>{
            localStorage.setItem("username", data.username)
                this.props.history.push('/Home')
        },
            error => {
            alert(error.message)
        })
    }

}

export default Login;

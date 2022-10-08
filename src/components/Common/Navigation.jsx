import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        return (
            <>
                <div className={(this.props.bgcolor !== '') ? `header-nav navbar-collapse collapse ${this.props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
                    <ul className="nav navbar-nav">
                        <li className={this.props.active === 1?"active":""} >
                            <NavLink to={""}>Inicio</NavLink>
                        </li>
                        <li className={this.props.active === 2?"active":""}>
                        <NavLink to={"/about"}>Sobre Nosotros</NavLink>
                        </li>
                        <li className={this.props.active === 3?"active":""}>
                        <NavLink to={"/products"}>Productos</NavLink>
                        </li>
                        <li className={this.props.active === 4?"active":""}>
                        <NavLink to={"/location"}>Ubicación E Información</NavLink>
                        </li>
                    </ul>
                </div>
            </>
        );
    };
};

export default Navigation;
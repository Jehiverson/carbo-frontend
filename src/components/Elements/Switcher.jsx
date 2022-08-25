import React from 'react';
import { NavLink } from 'react-router-dom';

const skins = [1, 2, 3, 4, 5, 6, 7, 8];

var bgimg = require('./../../images/background/bg-boxed.jpg');

class Switcher extends React.Component {

    constructor(props) {
        super(props);
        this.handleSwitchSkin.bind(this);
        this.state = { stylePath: './assets/css/skin/skin-1.css' };
    }

    componentDidMount = () => {
        var homepage3 = /\/homepage3/i;

        if (homepage3.test(window.location.href)) {
            document.body.classList.add('boxed');
            document.body.classList.add('bg-repeat');
            document.body.id = 'bg';
            document.body.style.backgroundImage = "url(" + bgimg.default + ")";
        } else {
            document.body.classList.remove('boxed');
            document.body.classList.remove('bg-repeat');
            document.body.id = '';
            document.body.style.backgroundImage = "";
        }
        this.setState({ stylePath: './assets/css/skin/skin-1.css' });

    }

    state = { isSwitchActive: false };

    handleSwitchToggle = () => {
        this.setState({ isSwitchActive: !this.state.isSwitchActive });
    };

    handleSwitchSkin = (skinitem) => {
        var homepage4 = /\/homepage4/i;
        var homepage2 = /\/homepage2/i;

        const skin = skinitem.item;

        var logo = '';
        var footerlogo = '';

        if (homepage4.test(window.location.href)) {
            logo = require('./../../images/logo-light-' + skin + '.png');
        } else {
            logo = require('./../../images/logo-' + skin + '.png');
        }
        if (homepage2.test(window.location.href)) {
            footerlogo = require('./../../images/logo-' + skin + '.png');
        } else {
            footerlogo = require('./../../images/logo-light-' + skin + '.png');
        }

        this.props.updateFooterLogo(footerlogo);

        window.updateTopMostParent(logo);

        if (skin === 1) {
            this.setState({ stylePath: './assets/css/skin/skin-1.css' });
        } else if (skin === 2) {
            this.setState({ stylePath: './assets/css/skin/skin-2.css' });
        } else if (skin === 3) {
            this.setState({ stylePath: './assets/css/skin/skin-3.css' });
        } else if (skin === 4) {
            this.setState({ stylePath: './assets/css/skin/skin-4.css' });
        } else if (skin === 5) {
            this.setState({ stylePath: './assets/css/skin/skin-5.css' });
        } else if (skin === 6) {
            this.setState({ stylePath: './assets/css/skin/skin-6.css' });
        } else if (skin === 7) {
            this.setState({ stylePath: './assets/css/skin/skin-7.css' });
        } else if (skin === 8) {
            this.setState({ stylePath: './assets/css/skin/skin-8.css' });
        }

    };

    render() {
        const isSwitchActive = this.state.isSwitchActive;

        return (
            <>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
            </>
        );
    };
};

export default Switcher;
import React from "react";

class NavItem extends React.Component {
    static get defaultProps() {
        return {
            className: "page-scroll"
        };
    }

    render() {
        return (
            <li {...this.props}>
                <a href={this.props.link}>{this.props.name}</a>
            </li>
        );
    }
}

export default class Nav extends React.Component {
    render() {
        return (<nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#page-top">React Components</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <NavItem link="#page-top" className="hidden" />
                        <NavItem link="#portfolio" name="Portfolio" />
                        <NavItem link="#about" name="About" />
                        <NavItem link="#contact" name="ContactUS" />
                    </ul>
                </div>
            </div>
        </nav>);
    }
}

import React from 'react';

export default class Portfolio extends React.Component {
  render() {
    return <section id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Portfolio</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">
                {this.props.children}
            </div>
        </div>
    </section>;
  }
}

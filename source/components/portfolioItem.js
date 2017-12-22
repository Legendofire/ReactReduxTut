import React from 'react';

export default class PortfolioItem extends React.Component {
  render() {
    const path = `img/portfolio/${this.props.img}.png`;
    return (
      <div className="col-sm-4 portfolio-item">
        <a
          href="#portfolioModal1"
          className="portfolio-link"
          data-toggle="modal"
        >
          <div className="caption">
            <div className="caption-content">
              <i className="fa fa-search-plus fa-3x" />
            </div>
          </div>
          <img
            src={path}
            className="img-responsive"
            alt=""
          />
        </a>
      </div>
    );
  }
}

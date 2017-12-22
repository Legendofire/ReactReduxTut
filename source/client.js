import React from 'react';
import ReactDom from 'react-dom';
import Portfolio from './components/portfolio';
import PortfolioItem from './components/portfolioItem';

ReactDom.render(<Portfolio>
  <PortfolioItem img='cabin' />
  <PortfolioItem img='cake' />
  <PortfolioItem img='circus' />
  <PortfolioItem img='game' />
  <PortfolioItem img='safe' />
  <PortfolioItem img='submarine' />
</Portfolio>, document.getElementById('react-app'));

import React from 'react';
import Section from './section';
import PortfolioItem from './portfolioItem';

export default class Portfolio extends React.Component {
    render() {
        var children = [];
        for (var item of this.props.data) {
          children.push(<PortfolioItem data={item} key={children.length} />);
        }

        //let children = map(this.props.data, (item, index) => <PortfolioItem data={item} key={index} />)

        return (<Section id="portfolio" title="Portfolio">
            {children};
        </Section>);
    }
}

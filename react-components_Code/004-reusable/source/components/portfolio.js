import React from "react";
import Section from "./section";
import PortfolioItem from "./portfolioComponent";

export default class Portfolio extends React.Component {
    render() {
        console.log(this.props.data);
        let children = [];
        for (let item of this.props.data) {
            children.push(<PortfolioItem data={item} key={children.length} />);
        }


        return (<Section id="portfolio" title="Portfolio">
            {children}
        </Section>);
    }
}

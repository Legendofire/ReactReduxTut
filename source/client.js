import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

const portfolioModel = [
    { img: 'cake', link: 'http://www.google.com' },
    { img: 'circus', link: 'http://www.google.com' },
    { img: 'game', link: 'http://www.google.com' },
    { img: 'safe', link: 'http://www.google.com' },
    { img: 'submarine', link: 'http://www.google.com' },
    { img: 'cabin', link: 'http://www.google.com' }
];

ReactDom.render(<div>
    <Header />
    <Portfolio data={portfolioModel} />
    <About />
    <Contact />
    <Footer />
</div>, document.getElementById('react-app'));

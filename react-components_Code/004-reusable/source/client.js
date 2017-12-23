import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const portfolioModel =
  [
      { img: 'cake', link: 'http://02geek.com' },
      { img: 'circus', link: 'http://02skills.com' },
      { img: 'game', link: 'http://packtpub.com' },
      { img: 'safe', link: 'http://02geek.com' },
      { img: 'submarine', link: 'http://02geek.com' },
      { img: 'cabin', link: 'http://anxpl.com' }
  ];
// let headerModel = {
//     title: "Master React Components",
//     subt: "React - Components - JSX - ES6"
// };


let footerModel = [
    { title: "Location" },
    {
        title: "Around the Web",
        content: [
            { link: "#", name: "facebook" },
            { link: "#", name: "google-plus" },
            { link: "#", name: "twitter" },
            { link: "#", name: "linkedin" },
            { link: "#", name: "dribbble" }


        ]
    },
    { title: "About Freelancer", content: "Freelance is a free to use, open source Bootstrap theme created by Start Bootstrap." }
];

let model = {
    portfolio: portfolioModel,
    footer: footerModel
};

ReactDOM.render(
    <App data={model} />
    , document.getElementById('page-top'),
);

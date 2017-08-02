import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Slider from './components/Slider';
const IMAGES=[
    {src:require('./images/1.jpg')},
    {src:require('./images/2.jpg')},
    {src:require('./images/3.jpg')}
];
ReactDOM.render(<Slider images={IMAGES} autoPlay={true} delay={1.5} speed={1} arrows={true} dots={true}/>,document.querySelector('#root'));
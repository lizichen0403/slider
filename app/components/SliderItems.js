import React,{Component} from 'react';
export default class SliderItems extends Component{
    render(){
        let style={
            width:(this.props.images.length+1)*300+'px',
            left:this.props.index*-300+'px',
            transitionDuration:this.props.speed+'s'
        }
        return (
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((image,index)=>(
                        <li className="slider" key={index}>
                            <img src={image.src} alt=""/>
                        </li>
                    ))
                }
                <li className="slider" key={this.props.images.length}>
                    <img src={this.props.images[0].src}/>
                </li>
            </ul>
        )
    }
}
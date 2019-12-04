import React, {Component} from 'react';
import './Card.css';

class Card extends Component{
    constructor(){
        super();

        this.state = {
            isClicked: false
        }
    }

    render(){
        const { img, onClick, type } = this.props;
        const hiddenClassName = type === "none" ? "hidden" : "";
        return (
            <div className={`card ${hiddenClassName}`}
                 onClick={onClick}>
                <i className={`${img} ${hiddenClassName}`} />
                <div className={type === "selected-card" ? "card-overlay--clicked" : `card-overlay ${hiddenClassName}`}></div>
            </div>
        )
    }
}

export default Card;
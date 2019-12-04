import React, {Component} from 'react';
import { connect } from 'react-redux';
import { startGame } from '../../actions';
import './Modal.css';

class Modal extends Component{
    render(){
        const { startGame } = this.props;
        return (
            <div className="modal">
                <div className="modal-text">YOU WIN!</div>
                <div className="modal-btn">
                    <button onClick={() => startGame()}>new game</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    startGame: _ => dispatch(startGame())
})

export default connect(null, mapDispatchToProps)(Modal);
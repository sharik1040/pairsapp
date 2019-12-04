import React, {Component} from 'react';
import { connect } from 'react-redux'
import './Score.css';
import { startGame } from '../../actions';
import Modal from '../Modal/Modal';


class Score extends Component{
    render(){
        const {score, startGame, isWin} = this.props;

        const modalBody = isWin ? <Modal /> : "";
        const displayButton = isWin ? "" : <button onClick={() => startGame()}>new game</button>;
        return (
            <div className="score">
                
                SCORE:
                {score}
                {displayButton}
                {modalBody}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    score: state.score,
    isWin: state.isWin
})

const mapDispatchToProps = dispatch => ({
    startGame: _ => dispatch(startGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(Score);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectCard, checkPair } from  '../../actions';
import './CardsList.css';
import Card from '../Card/Card';

class CardsList extends Component{

    render(){
        const { cards, cardSelect, selectCard, checkPair } = this.props;
        return (
            <div className="cards-list">
                {
                    cards.map(card => { 
                        return <Card key={card.id}
                              {...card}
                              onClick={() => {
                                  if(cardSelect <= 1){
                                    selectCard(card.id);

                                    if(cardSelect>=1){
                                        setTimeout(checkPair, 300, card.id);
                                    }
                                  }
                                }}
                    />})
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cards: state.cards,
    cardSelect: state.cardSelect
})

const mapDispatchToProps = dispatch => ({
    selectCard: id => dispatch(selectCard(id)),
    checkPair: id => dispatch(checkPair(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
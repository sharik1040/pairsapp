// card
// selected-card
// none

const initialState = {
    cards: [
        {id: 1, img: "fas fa-cat", type: "card"},
        {id: 2, img: "fas fa-cat", type: "card"},
        {id: 3, img: "fas fa-crow", type: "card"},
        {id: 4, img: "fas fa-crow", type: "card"},
        {id: 5, img: "fas fa-dog", type: "card"},
        {id: 6, img: "fas fa-dog", type: "card"},
        {id: 7, img: "fas fa-dove", type: "card"},
        {id: 8, img: "fas fa-dove", type: "card"},
        {id: 9, img: "fas fa-dragon", type: "card"},
        {id: 10, img: "fas fa-dragon", type: "card"},
        {id: 11, img: "fas fa-feather", type: "card"},
        {id: 12, img: "fas fa-feather", type: "card"},
        {id: 13, img: "fas fa-feather-alt", type: "card"},
        {id: 14, img: "fas fa-feather-alt", type: "card"},
        {id: 15, img: "fas fa-fish", type: "card"},
        {id: 16, img: "fas fa-fish", type: "card"},
        {id: 17, img: "fas fa-frog", type: "card"},
        {id: 18, img: "fas fa-frog", type: "card"},
        {id: 19, img: "fas fa-hippo", type: "card"},
        {id: 20, img: "fas fa-hippo", type: "card"},
        {id: 21, img: "fas fa-horse", type: "card"},
        {id: 22, img: "fas fa-horse", type: "card"},
        {id: 23, img: "fas fa-horse-head", type: "card"},
        {id: 24, img: "fas fa-horse-head", type: "card"},
        {id: 25, img: "fas fa-kiwi-bird", type: "card"},
        {id: 26, img: "fas fa-kiwi-bird", type: "card"},
        {id: 27, img: "fas fa-otter", type: "card"},
        {id: 28, img: "fas fa-otter", type: "card"},
        {id: 29, img: "fas fa-paw", type: "card"},
        {id: 30, img: "fas fa-paw", type: "card"}
    ],
    currentCard: "",
    cardSelect: 0,
    score: 0,
    maxScore: 0,
    isWin: false
}



const pairs = (state = initialState, action) => {
    switch(action.type){
        case "SELECT_CARD":
            return {
                ...state,
                cards: state.cards.map(card => card.id === action.id ? 
                                                    {...card, type: "selected-card"} : card),
                currentCard: action.id,
                cardSelect: state.currentCard !== action.id ? state.cardSelect + 1 : state.cardSelect
            }
        case "CHECK_PAIR":
            let pair = state.cards.filter(card => card.type === "selected-card");
            let type = "card", currentScore = state.score;
            if(pair.length === 2 && pair[0].img === pair[1].img){
                type = "none";
                currentScore += 10;
            }
            return {
                ...state,
                cards: state.cards.map(card => pair.includes(card) ? {...card, type: type} : card),
                currentCard: "",
                cardSelect: 0,
                score: currentScore,
                isWin: currentScore === state.maxScore
            }
        case "START_GAME":
            return {
                cards: initialState.cards.sort(() => 0.5 - Math.random),
                currentCard: "",
                cardSelect: 0,
                score: 0,
                maxScore: state.cards.length * 5
            }
        default:
            console.log("default start game");

            return {
                ...state,
                cards: state.cards.sort(() => 0.5 - Math.random()),
                maxScore: state.cards.length * 5
            }
    }
}

export default pairs
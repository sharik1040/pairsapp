export const selectCard = id => ({
    type: "SELECT_CARD",
    id
})

export const checkPair = id => ({
    type: "CHECK_PAIR",
    id
})

export const startGame = _ => ({
    type: "START_GAME"
})
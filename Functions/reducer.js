const startState = {
    conf: 0,
    dead: 0,
    recovered: 0,
    location: false,
    new: 0,
    modal: false
}

export const reducer = (state = startState,action) => {
    switch(action.type){
        case "setModal":
            return {...state, modal: state.modal = !state.modal}
        default:
            return state
    }
}
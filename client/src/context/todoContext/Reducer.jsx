const Reducer = (state, action) => {
    switch (action.type) {

        case "ADD":
            return {
                ui: action.payload
            }
        case "VIEW":
            return {
                ui: action.payload
            }
        case "PROFILE":
            return {
                ui: action.payload
            }
        default:
            return state;
    }
}

export default Reducer;

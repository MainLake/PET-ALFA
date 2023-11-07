export const reducerGlobalState = (state, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                usuario: {
                    token: action.payload,
                    autenticado: true
                }
            }
        case "LOGOUT":
            return {
                ...state,
                usuario: {
                    token: null,
                    autenticado: false
                }
            }

        default:
            return state
    }
}


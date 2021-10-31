import axios from "axios";

// constantes
const dataInicial = {
    array: []
}

//types
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"

//reducer
export default function pokereducer(state = dataInicial, action){
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
            return {...state, array: action.payload}

        default:
            return state
    }
}

//acciones (se puden configuarar varias)

export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

    if(localStorage.getItem("pokeapi")){
        console.log("desde local")
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem("pokeapi"))
        })
        return;
    }
    
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
        localStorage.setItem("pokeapi", JSON.stringify(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
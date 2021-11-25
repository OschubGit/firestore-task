
import {auth, firebase, db} from "../firebase"
// datainicial
const dataInicial = {
    tareas: []
}

//types
const SHOW_TASKS = "SHOW_TASKS"

//reducer
export default function showTasks(state = dataInicial, action) {
    switch (action.type) {
        case SHOW_TASKS:
            return {...state, tareas: action.payload}
        default:
            return {...state};
    }
}


//acciones
export const showTasksAcction = () => async (dispatch) => {
    const res = db.collection(auth.currentUser.uid).onSnapshot()
    console.log(res)
    dispatch({
        type: SHOW_TASKS,
        payload: {
           tareas: res.data          
        }
    })
    console.log(res.data)
}
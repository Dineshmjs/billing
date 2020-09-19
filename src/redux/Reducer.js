import { sidemenu, newsales, viewproduct,reload } from './Type'



const inittialState = {
    sideMenu: "sales",
    newSales: false,
    viewProduct: false,
    reload: 0

}

const Reducer = (state = inittialState, action) => {
    switch (action.type) {
        case sidemenu:
            return {
                ...state,
                sideMenu: action.data
            }
        case newsales:
            return {
                ...state,
                newSales: action.data
            }
        case viewproduct:
            return {
                ...state,
                viewProduct: action.data
            }
        case reload:
            return {
                ...state,
                reload: state.reload + 1
            }
        default: return state
    }
}

export default Reducer
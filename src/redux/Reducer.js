import { sidemenu, newsales, viewproduct } from './Type'



const inittialState = {
    sideMenu: "sales",
    newSales: false,
    viewProduct:false

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
        default: return state
    }
}

export default Reducer
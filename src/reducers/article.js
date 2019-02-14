import {types} from "actions/articleActions"

const initialState = {
    articles: [],
};

export default function (state = initialState, action) {

    switch (action.type) {
        case types.FETCH_ARTICLES:
            return {
                ...state,
                items: action.data
            }
        default:
            return state;
    }
}

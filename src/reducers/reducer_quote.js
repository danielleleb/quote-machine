import {FETCH_QUOTE} from "../actions";

// const initialState = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_QUOTE:
            console.log('action: ', action)
            return [action.payload, ...state];
    }
    return state;
}
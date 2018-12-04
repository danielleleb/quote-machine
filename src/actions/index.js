import axios from 'axios';

const ROOT_URL = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

export const FETCH_QUOTE = 'FETCH_QUOTE';

export function fetchQuote() {
    const request = axios.get(ROOT_URL);
    console.log(request)
    return {
        type: FETCH_QUOTE,
        payload: request
    }
}
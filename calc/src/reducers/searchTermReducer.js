import {SEARCH_NEWS} from '../actions/actionTypes';

//여긴 LOAD 랑 다르게 불러올 것이 하나니까 state 가 배열이 아니고 문자열인가부지?
export default (state='', action={}) => {
    switch(action.type){
        case SEARCH_NEWS:
           return action.payload;
        default:
            return state;
    }   
}
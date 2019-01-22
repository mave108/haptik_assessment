import {  PRODUCTS, MY_LIKES, COMMENTS} from '../../Actions/types';
const Main = (state = {}, action) => {
    switch(action.type) {
        case PRODUCTS:
        return { ...state, products: action.payload };  
        case MY_LIKES:
        return { ...state, likes: action.payload };  
        case COMMENTS:
        return { ...state, comments: action.payload };          
        default:
          return state;
      }
}
export default Main;
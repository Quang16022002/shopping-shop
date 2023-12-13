import handleCart from './handleCart';
import cartDisplay from './cartDisplay';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    handleCart,
    cartDisplay,
});
export default rootReducer;

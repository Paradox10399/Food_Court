import axios from "../api/axios";
import { CATEGORIES_URL } from '../utils/Constant'

import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR,
} from './actions'


export const startFetchCategories = async (dispatch) => {
    try {
        dispatch({ type: FETCH_CATEGORY_BEGIN });
        const response = await axios.get(`${CATEGORIES_URL}`);
        console.log(response)
        dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories })
    } catch (error) {

    }
}